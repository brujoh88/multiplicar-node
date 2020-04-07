/* Requiero a yargs y el metodo commando(
  Arumento:
  1. Comando
  2. Ayuda
  3. Objeto (va a recibir la configuarion del comando)
  ) */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicador.js')
const { argv } = require('./config/yargs')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e))
    break
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo}`))
      .catch((e) => console.log(e))
    break
  default:
    console.log('Comando no reconocido')
}
