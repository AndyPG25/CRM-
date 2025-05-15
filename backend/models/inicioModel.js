const pool = require('../db');

const getInicioData = async () => {
  const result = await pool.query('SELECT * FROM info_inicio LIMIT 1');
  return result.rows[0];
};

const updateInicioData = async (data) => {
  const { vision, mision, valores, nosotros, organigrama } = data;
  await pool.query(`
    UPDATE info_inicio
    SET vision = $1, mision = $2, valores = $3, nosotros = $4, organigrama = $5
    WHERE id = 1
  `, [vision, mision, valores, nosotros, organigrama]);
};

module.exports = { getInicioData, updateInicioData };
