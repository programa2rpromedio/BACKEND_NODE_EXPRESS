const http = require('http')

const port = 3000

const server = http.createServer((request, response) => {

  const users = [
    { name: 'John', email: 'john@elastic.com' },
    { name: 'Juan', email: 'juan@elastic.com' }
  ]

  response.setHeader('Content-Type', 'application/json')
  response.write(JSON.stringify(users))
  response.end()

})

server.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:3000');
})