const express = require('express');
const fs = require('fs');
const app = express()
const port = 3000


// app.get('/hola', (req, res) => {
//   res.send('Hola mundo desde express')
// })

console.log(__dirname);

app.use(express.json())

app.get('/productos', (req, res) => {
  const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'));
  res.json(productos)
})

app.post('/productos', (req, res) => {
  console.log("[BODY DE LA CONSULTA]: ", req.body);
  const body = req.body
  const arrayProductos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'))
  arrayProductos.push(body)
  fs.writeFileSync('./productos.json', JSON.stringify(arrayProductos))
  res.json({ mensaje: 'Producto cargado correctamente', data: arrayProductos })
})

app.delete('/productos/:id', (req, res) => {
  const id = req.params.id
  console.log("ID de la solicitud", id);
  const arrayProductos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'))
  const nuevoArray = arrayProductos.filter((item) => item.id !== id)
  fs.writeFileSync('./productos.json', JSON.stringify(nuevoArray))
  res.send("Producto eliminado correctamente")
})

app.put('/productos/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  const arrayProductos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'))
  const nuevoArray = arrayProductos.map((item) => {
    if (item.id === id) {
      return { ...item, ...body }
    } else {
      return item
    }
  })
  fs.writeFileSync('./productos.json', JSON.stringify(nuevoArray))
  res.json({ mensaje: 'Producto actualizado correctamente', data: nuevoArray })
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


app.listen(port, () => {
  console.log('Servidor: listening on port ', port);
})