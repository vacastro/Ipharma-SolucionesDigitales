import { Request, Response } from 'express';
import { PrismaClient, FormaFarmaceutica, Presentacion } from '../../src/generated/prisma';
import axios from 'axios';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();

// METODO PARA CREAR UN NUEVO MEDICAMENTO
export const crearMedicamento = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      principioActivo,
      laboratorio,
      proveedorId,
      fechaVencimiento,
      formaFarmaceutica,
      presentacion,
      lote,
      stock,
    } = req.body;

    // Validaciones
    if (
      !nombre || !principioActivo || !laboratorio || !proveedorId ||
      !fechaVencimiento || !formaFarmaceutica || !presentacion || !lote || stock === undefined
    ) {
      res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Verificar proveedor
    const proveedor = await prisma.proveedor.findUnique({
      where: { id: Number(proveedorId) },
    });

    if (!proveedor) {
      res.status(404).json({ message: 'Proveedor no encontrado.' });
    }

    const nuevoMedicamento = await prisma.medicamento.create({
      data: {
        nombre: nombre.trim(),
        principioActivo: principioActivo.trim(),
        laboratorio: laboratorio.trim(),
        proveedorId: Number(proveedorId),
        fechaVencimiento: new Date(fechaVencimiento),
        formaFarmaceutica: formaFarmaceutica.trim() as FormaFarmaceutica,
        presentacion: presentacion.trim() as Presentacion,
        lote: lote.trim(),
        stock: Number(stock),
      },
    });

    res.status(201).json(nuevoMedicamento);
  } catch (error) {
    console.error('Error al crear medicamento:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA MODIFICAR ALGUN CAMPO DE MEDICAMENTO

export const actualizarMedicamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    nombre,
    principioActivo,
    laboratorio,
    proveedorId,
    fechaVencimiento,
    formaFarmaceutica,
    presentacion,
    lote,
    stock,
  } = req.body;

  try {
    const medicamentoExistente = await prisma.medicamento.findUnique({
      where: { id: Number(id) },
    });

    if (!medicamentoExistente) {
      res.status(404).json({ message: 'Medicamento no encontrado.' });
    }

    // Validar proveedor
    if (proveedorId) {
      const proveedor = await prisma.proveedor.findUnique({
        where: { id: Number(proveedorId) },
      });

      if (!proveedor) {
        res.status(404).json({ message: 'Proveedor no encontrado.' });
      }
    }

    const medicamentoActualizado = await prisma.medicamento.update({
      where: { id: Number(id) },
      data: {
        nombre,
        principioActivo,
        laboratorio,
        proveedorId,
        fechaVencimiento: fechaVencimiento ? new Date(fechaVencimiento) : undefined,
        formaFarmaceutica: formaFarmaceutica ? formaFarmaceutica.trim() as FormaFarmaceutica : undefined,
        presentacion: presentacion ? presentacion.trim() as Presentacion : undefined,
        lote,
        stock,
      },
    });

    res.status(200).json(medicamentoActualizado);
  } catch (error) {
    console.error('Error al actualizar medicamento:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA ELIMINAR UN MEDICAMENTO

export const eliminarMedicamento = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const medicamentoExistente = await prisma.medicamento.findUnique({
      where: { id: Number(id) },
    });

    if (!medicamentoExistente) {
      res.status(404).json({ message: 'Medicamento no encontrado.' });
    }

    await prisma.medicamento.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: 'Medicamento eliminado correctamente.' });
  } catch (error) {
    console.error('Error al eliminar medicamento:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA OBTENER TODOS LOS MEDICAMENTOS DE LA BASE DE DATOS

export const obtenerMedicamentos = async (_req: Request, res: Response) => {
  try {
    const medicamentos = await prisma.medicamento.findMany({
      include: {
        proveedor: true, // trae datos del proveedor asociado
      },
      orderBy: {
        nombre: 'asc',
      },
    });

    if (medicamentos.length === 0) {
      res.status(404).json({ message: 'No se encontraron medicamentos.' });
    }

    res.status(200).json(medicamentos);
  } catch (error) {
    console.error('Error al obtener medicamentos:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA BUSCAR UN MEDICAMENTO POR NOMBRE, PRINCIPIO ACTIVO O LABORATORIO

export const buscarMedicamentos = async (req: Request, res: Response) => {
  const { nombre, principioActivo, laboratorio } = req.query;

  try {
    const todos = await prisma.medicamento.findMany({
      include: {
        proveedor: true,
      },
      orderBy: {
        nombre: 'asc',
      },
    });

    const filtroTexto = (valor: string, texto: string) =>
      valor.toLowerCase().includes(texto.toLowerCase());

    const resultado = todos.filter((med) => {
      const coincideNombre =
        !nombre || filtroTexto(med.nombre, nombre as string);

      const coincidePA =
        !principioActivo || filtroTexto(med.principioActivo, principioActivo as string);

      const coincideLab =
        !laboratorio || filtroTexto(med.laboratorio, laboratorio as string);

      return coincideNombre && coincidePA && coincideLab;
    });

    if (resultado.length === 0) {
      res.status(404).json({ message: 'No se encontraron medicamentos con esos filtros.' });
      return;
    }

    res.status(200).json(resultado);
  } catch (error) {
    console.error('Error al buscar medicamentos:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
    return;
  }
};

// METODO PARA TRAER LOS MEDICAMENTOS ORDENADOS POR FECHA DE VENCIMIENTO ASCENDENTE

export const obtenerMedicamentosProximosAVencer = async (_req: Request, res: Response) => {
  try {
    const medicamentos = await prisma.medicamento.findMany({
      orderBy: {
        fechaVencimiento: 'asc',
      },
      include: {
        proveedor: true,
      },
    });

    if (medicamentos.length === 0) {
      res.status(404).json({ message: 'No se encontraron medicamentos.' });
    }

    res.status(200).json(medicamentos);
  } catch (error) {
    console.error('Error al obtener medicamentos ordenados por vencimiento:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA CARGAR UN LOTE DE MEDICAMENTOS CON UN ARCHIVO EXCEL O CSV -- FALTA TESTEAR

export const cargarLoteMedicamentos = async (req: Request, res: Response) => {
  const proveedorId = req.body.proveedorId;
  const file = req.file;

  if (!proveedorId || !file) {
    res.status(400).json({ message: 'Faltan el archivo o el proveedorId' });
    return;
  }

  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { id: Number(proveedorId) },
    });

    if (!proveedor) {
      res.status(404).json({ message: 'Proveedor no encontrado.' });
      return;
    }

    const workbook = XLSX.readFile(file.path);

    const primeraHoja = workbook.SheetNames[0];

    const datos = XLSX.utils.sheet_to_json<{
      nombre: string;
      principioActivo: string;
      laboratorio: string;
      fechaVencimiento: string;
      formaFarmaceutica: string;
      presentacion: string;
      lote: string;
      stock: number;
    }>(workbook.Sheets[primeraHoja], { defval: '' });

    const medicamentosCreados = [];

    for (const fila of datos) {
      const {
        nombre,
        principioActivo,
        laboratorio,
        fechaVencimiento,
        formaFarmaceutica,
        presentacion,
        lote,
        stock,
      } = fila;

      if (
        !nombre || !principioActivo || !laboratorio ||
        !fechaVencimiento || !formaFarmaceutica || !presentacion ||
        !lote || stock === undefined
      ) continue;

      const nuevo = await prisma.medicamento.create({
        data: {
          nombre: String(nombre).trim(),
          principioActivo: String(principioActivo).trim(),
          laboratorio: String(laboratorio).trim(),
          proveedorId: Number(proveedorId),
          fechaVencimiento: new Date(fechaVencimiento),
          formaFarmaceutica: String(formaFarmaceutica).trim() as FormaFarmaceutica,
          presentacion: String(presentacion).trim() as Presentacion,
          lote: String(lote).trim(),
          stock: Number(stock),
        },
      });

      medicamentosCreados.push(nuevo);
    }

    res.status(201).json({
      message: 'Carga masiva completada.',
      cantidad: medicamentosCreados.length,
    });
  } catch (error) {
    console.error('Error al cargar lote de medicamentos:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// METODO PARA TREAR TODAS LAS FORMAS FARMACEUTICAS, QUE PUEDEN SERVIR PARA UN COMBO BOX

export const obtenerFormasFarmaceuticas = async (_req: Request, res: Response) => {
  const formas = Object.values(FormaFarmaceutica);
  res.status(200).json(formas);
};

//METODO PARA TREAR TODAS LAS PRESENTACIONES, QUE PUEDEN SERVIR PARA UN COMBO BOX

export const obtenerPresentaciones = async (_req: Request, res: Response) => {
  const presentaciones = Object.values(Presentacion);
  res.status(200).json(presentaciones);
};
