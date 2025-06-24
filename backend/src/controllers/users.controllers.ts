// src/controllers/users.controller.ts
import { Request, Response } from 'express';
import prisma from '../db';
import { Perfil } from '../generated/prisma';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        perfil: true,
        activo: true,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: err });
  }
};


export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const user = await prisma.usuario.findUnique({ where: { id } });
    if (!user) res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuario', error: err });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  try {
    const updated = await prisma.usuario.update({ where: { id }, data: { nombre: name, email } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar usuario', error: err });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    await prisma.usuario.delete({ where: { id } });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar usuario', error: err });
  }
};


export const createUser = async (req: Request, res: Response) => {
  const { nombre, email, clave, perfil } = req.body;

  if (!nombre || !email || !clave || !perfil) {
    res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  if (!['farmaceutico', 'administrativo'].includes(perfil)) {
    res.status(400).json({ message: 'Perfil no válido' });
  }

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        email,
        clave,
        perfil,
        activo: true,
      },
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error interno al crear usuario' });
  }
};

export const obtenerPerfiles = (_req: Request, res: Response) => {
  const perfiles = Object.values(Perfil);
  res.status(200).json(perfiles);
};