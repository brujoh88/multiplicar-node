const option = {
  base: {
    demand: true,
    alias: 'b',
    describe: 'Base por la que se mult. * 2',
  },
  limite: {
    alias: 'l',
    default: 10,
    describe: 'Hasta el valor deseado a ver',
  },
}
const argv = require('yargs')
  .command('listar', 'Imprime en pantalla la tabla de multiplicar', option)
  .command(
    'crear',
    'Crea un archivo de multiplicar aportanto base / [.limite]',
    option
  )
  .help().argv

module.exports = {
  argv,
}
