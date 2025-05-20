import { Request, Response } from 'express';
import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient();

export const crearProveedor = async (req: Request, res: Response) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    // Validaciones básicas
    if (!nombre || !direccion || !telefono) {
       res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Validar que no exista un proveedor con el mismo nombre
    const proveedorExistente = await prisma.proveedor.findFirst({
      where: { nombre: nombre.trim() },
    });

    if (proveedorExistente) {
       res.status(409).json({ message: 'Ya existe un proveedor con ese nombre.' });
    }

    // Crear proveedor
    const nuevoProveedor = await prisma.proveedor.create({
      data: {
        nombre: nombre.trim(),
        direccion: direccion.trim(),
        telefono: Number(telefono),
      },
    });

    res.status(201).json(nuevoProveedor);
  } catch (error) {
    console.error('Error al crear proveedor:', error);
    res.status(500).json({ message: 'Error del servidor.' });
  }
};

export const obtenerProveedores = async (req: Request, res: Response) => {
  try {
    const proveedores = await prisma.proveedor.findMany();

    if (proveedores.length === 0) {
      res.status(404).json({ message: 'No se encontraron proveedores.' });
    }

    res.status(200).json(proveedores);
  } catch (error) {
    console.error('Error al obtener proveedores:', error);
    res.status(500).json({ message: 'Error del servidor.' });
  }
};



export const updateProveedor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, direccion, telefono } = req.body;

  try {
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: { id: Number(id) },
    });

    if (!proveedorExistente) {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }

    const proveedorActualizado = await prisma.proveedor.update({
      where: { id: Number(id) },
      data: {
        nombre,
        direccion,
        telefono,
      },
    });

    res.status(200).json(proveedorActualizado);
  } catch (error) {
    console.error("Error al actualizar proveedor:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};



export const eliminarProveedor = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const proveedorExistente = await prisma.proveedor.findUnique({
      where: { id: Number(id) },
    });

    if (!proveedorExistente) {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }

    await prisma.proveedor.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Proveedor eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar proveedor:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
