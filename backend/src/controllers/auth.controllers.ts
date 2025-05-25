import bcrypt from 'bcrypt';
import prisma from '../db';
import { Request, Response } from 'express';
import { UserProfile } from '../models/enums';
import { Perfil, Usuario } from '../generated/prisma'
import { generateToken } from '../utils/jwt';

export const registerUser = async (req: Request, res: Response) => {
  const { email, clave, nombre, perfil } = req.body as Usuario;

  const existingUser = await prisma.usuario.findFirst({ where: { email: email } });
  if (existingUser) res.status(400).json({ message: 'Email ya registrado' });

  if (!isValidPerfilEnum(perfil)) {
    res.status(400).json({ message: 'Perfil inválido' });
  }

  const hashedPassword = await bcrypt.hash(clave, 10);

  console.log('Registrando usuario ...', { email, clave, nombre, perfil, hashedPassword });

  const user = await prisma.usuario.create({
    data: {
      nombre: nombre,
      email: email,
      clave: hashedPassword,
      perfil: perfil,
      activo: true
    },
  });

  res.status(201).json({ message: 'Usuario creado con éxito', user });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.usuario.findFirst({ where: { email } });
    if (!user) res.status(401).json({ message: 'Credenciales inválidas' });

    const valid = await bcrypt.compare(password, user?.clave!);
    if (!valid) res.status(401).json({ message: 'Credenciales inválidas' });

    const token = generateToken({ id: user?.id, email: user?.email });

    res.json({ message: 'Login exitoso', token });
  } catch (err) {
    res.status(500).json({ message: 'Error en login', error: err });
  }
};


const isValidPerfilEnum = (value: any): value is Perfil => {
  return value === 'farmaceutico' || value === 'administrativo';
};