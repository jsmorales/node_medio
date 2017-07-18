const Cliente = require('./cliente.js');

//var clienteGitHub = new Cliente("localhost","3000","http");

//console.log(clienteGitHub);

var cliente = new Cliente("localhost","8080","http");

//autenticar el cliente con basicAuth
//clienteGitHub.autenticarBasic("jsmorales","3115208657a")


//se hace de esta forma para que sea no bloqueante
//no se debe esperar hasta que halla respuesta del
//server para que pueda continuar la ejecución
/*clienteGitHub.get("/users/jsmorales", (respuesta)=>{
  console.log(respuesta.body);
})*/

// /jsmorales/node_player_desktop/issues/1
cliente.post("/animal",{
  nombre: "Red",
  especie: "Tigre Dientes de Sable"
}, (respuesta)=>{
  console.log(respuesta);
})
