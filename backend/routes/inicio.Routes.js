// backend/routes/inicio.Routes.js
const express = require('express');
const { getInicio } = require('../controllers/inicio.Controller');


const router = express.Router();

// No pongas /api/inicio aquí porque ya lo estás usando en index.js
router.get('/', getInicio);

module.exports = router;
