// console.log('Hola Mundo! Desde node JS')
// Crear una aplicación en Node que registre y lea información
// en formato JSON

// fs.writeFileSync('texto.txt', 'Hola Mundo!!!')
// let materias = ['1- Desarrollo web', '2- JavaScript', '3- SQL']
// fs.writeFileSync('texto.txt', JSON.stringify(materias))

// const contenidoArchivo = fs.readFileSync('texto.txt', 'utf-8')

// console.log(typeof contenidoArchivo)

// JSON.parse(contenidoArchivo).forEach(element => {
//   console.log(element);
// });

const { escribir, leer } = require('./funciones')
// const argumentos = process.argv.slice(2)
// console.log("[ARGUMNETOS]: ", argumentos);
// escribir('Programador', 'programdor@gmail.com', 'SQL')
// leer()

const [operacion, nombre, email, curso] = process.argv.slice(2)

if (operacion === 'escribir') {
  escribir(nombre, email, curso)
} else if (operacion === 'leer') {
  leer()
} else {
  console.log('Operacion incorrecta');
}