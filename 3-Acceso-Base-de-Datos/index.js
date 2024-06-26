const express = require('express')
const { getData, insertData } = require('./db')
const cors = require('cors')
const app = express()

const port = 3000

app.use(cors())
app.use(express.json())

app.get('/productos', async (req, res) => {
  const data = await getData()
  res.json({ error: false, data: data })
})

app.post('/productos', async (req, res) => {
  const body = req.body
  const { nombre, precio, stock } = body
  const data = await insertData({ nombre, precio, stock })
  if (data !== 0) return res.json({ error: false, data: 'Producto agregado correctamente' })
  res.json({ error: true, data: 'No se pudo agregar el producto' })
})


// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })


app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:3000');
})