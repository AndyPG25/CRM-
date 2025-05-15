const express = require('express');
const router = express.Router();
const { getInicio, updateInicio } = require('../controllers/inicio.Controller');

router.get('/', getInicio);
router.put('/', updateInicio);

module.exports = router;
