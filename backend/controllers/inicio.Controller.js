const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getInicio = async (req, res) => {     
  try {
    const data = await prisma.infoInicio.findUnique({
      where: { id: 1 },
    });
    res.json(data);
  } catch (error) {
    console.error('Error al obtener info:', error);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
};

const updateInicio = async (req, res) => {
  const { vision, mision, valores, nosotros, organigrama } = req.body;
  try {
    const updated = await prisma.infoInicio.upsert({
      where: { id: 1 },
      update: { vision, mision, valores, nosotros, organigrama },
      create: { id: 1, vision, mision, valores, nosotros, organigrama },
    });
    res.json(updated);
  } catch (error) {
    console.error('Error al actualizar info:', error);
    res.status(500).json({ message: 'Error al actualizar los datos' });
  }
};

module.exports = { getInicio, updateInicio };
