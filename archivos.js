const fs = require('fs')
//escritura por canales
const archivo = fs.createWriteStream('escritura.txt', {
  //modes de escritura
  flags: 'r+',//permite reescritura
  start: 7 //inicia en la posicion descrita
})
//escribe la info
archivo.write("adsfadfasfd")
//ingresa texto al cerrar el canal
archivo.end("---")
