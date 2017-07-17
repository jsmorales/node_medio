const express = require("express");

var app = express();

//para las sessiones se instala express-session
var session = require("express-session")

//se extiende la app y se necesita para funcionar por lo menos
//un parámetro json con el valor secret para firmar las cookies
//que se usan con cada cliente
app.use(session({
  secret:"app node js"
}))


/*ruta o route [plicacion escucha esta URI por el metodo get y aplica el callback]
request-->lo que llega a traves del cliente
response->lo que se le envia del server al cliente(respuesta)
*/


//para enrutar en la aplicacion con variables se hace una
//carpeta de rutas las cuales se instancian y se indica el
//uso en app.use asi:

var users = require("./routes/users.js")
app.use("/users",users)

var animal = require("./routes/animales.js")
app.use("/animal",animal)

app.listen("3000", ()=>{
  console.log("Express on-line.");
})
