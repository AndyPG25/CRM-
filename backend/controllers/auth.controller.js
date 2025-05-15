// controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'clave-secreta';

exports.register = async (req, res) => {
  const { email, password, role, empresa, area } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'El correo ya está registrado.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role, empresa, area },
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente.', user });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar el usuario.', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Contraseña incorrecta.' });

    const token = jwt.sign(
      { userId: user.id, role: user.role, empresa: user.empresa, area: user.area },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.status(200).json({ message: 'Login exitoso.', token, user });
  } catch (err) {
    res.status(500).json({ message: 'Error en el login.', error: err.message });
  }
};
