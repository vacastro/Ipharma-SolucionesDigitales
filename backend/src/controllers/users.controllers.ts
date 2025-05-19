// src/controllers/users.controller.ts
import { Request, Response } from 'express';
import prisma from '../db';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.usuario.findMany({ select: { id: true, nombre: true, email: true } });
    res.json(users);
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
    const updated = await prisma.usuario.update({ where: { id }, data: { nombre:name, email } });
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
