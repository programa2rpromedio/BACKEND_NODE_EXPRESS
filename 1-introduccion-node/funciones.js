const fs = require('fs');

const escribir = (nombre, email, curso) => {
  const contenidoActual = JSON.parse(fs.readFileSync('alumnos.json', 'utf8'));
  const nuevoAlumno = {
    nombre,
    email,
    curso
  }
  contenidoActual.push(nuevoAlumno)
  fs.writeFileSync('alumnos.json', JSON.stringify(contenidoActual))
}

// const nuevoAlumno = {
//   nombre: 'Programador Promedio',
//   email: 'programador@gmail.com',
//   curso: 'SQL'
// }

const leer = () => {
  const contenido = JSON.parse(fs.readFileSync('alumnos.json', 'utf8'))
  contenido.forEach(item => {
    console.log(`Alumno: ${item.nombre}, email: ${item.email},  curso: ${item.curso}`);
  });
}

module.exports = { escribir, leer }