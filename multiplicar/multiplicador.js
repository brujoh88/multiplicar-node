const fs = require('fs')
const colors = require('colors')

let data = ''

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject('El dato ingresado no es un numero')
      return
    }
    console.log('================================='.blue)
    console.log('================================='.blue)
    console.log(`=========TABLA DE ${base}==============`.trap)
    console.log('================================='.blue)
    console.log('================================='.blue)
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }
    resolve(data)
  })
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    //let data = ''
    if (!Number(base) || !Number(limite)) {
      reject('El dato ingresado no es un numero')
      return
    }
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFile(`./Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err)
      else resolve(colors.green(`./Tablas/tabla-del-${base}-al-${limite}.txt`))
    })
  })
}

module.exports = {
  crearArchivo, // crearArchivo : crearArchivo
  listarTabla,
}
