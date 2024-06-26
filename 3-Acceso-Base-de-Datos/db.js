const { Pool } = require('pg')

const pool = new Pool(
  {
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    port: 5432,
    database: 'tienda',
    allowExitOnIdle: true
  }
)

const getData = async () => {
  const result = await pool.query('SELECT * FROM productos')
  console.log("[RESPONSE DB]: ", result);
  return result.rows
}

// getData()

const insertData = async ({ nombre, precio, stock }) => {

  // const newRegistro = await pool.query(`INSERT INTO productos(nombre, precio, stock) VALUES('${nombre}', ${precio}, ${stock})`)
  // console.log('[RESULTADO INSERT]: ', newRegistro);

  const query = 'INSERT INTO productos(nombre, precio, stock) VALUES($1, $2, $3)'
  const values = [nombre, precio, stock]
  const result = await pool.query(query, values)
  return result.rowCount
}

// insertData({ nombre: 'Computador', precio: 400, stock: 4 })

module.exports = { getData, insertData }