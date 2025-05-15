// middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

// Clave secreta (usa variable de entorno en producción)
const JWT_SECRET = process.env.JWT_SECRET || 'clave-secreta';

/**

Middleware para verificar el token JWT en rutas protegidas.
*/
exports.verifyToken = (req, res, next) => {
// Esperamos el token en el encabezado "Authorization: Bearer <token>"
const authHeader = req.headers['authorization'];

if (!authHeader) {
return res.status(403).json({ message: 'Token no proporcionado.' });
}

const token = authHeader.split(' ')[1]; // Extraemos el token (después de 'Bearer')

if (!token) {
return res.status(403).json({ message: 'Formato de token inválido.' });
}

try {
// Verificamos el token
const decoded = jwt.verify(token, JWT_SECRET);
req.user = decoded; // Almacenamos la información del usuario en req
next(); // Continuamos con la siguiente función del middleware o controlador
} catch (err) {
console.error('Token inválido:', err.message);
return res.status(401).json({ message: 'Token inválido o expirado.' });
}
};