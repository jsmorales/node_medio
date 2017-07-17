const http = require('http')

var opciones = {
  port:80,
  hostname:"google.com",
  method:"get",
  path:"http://google.com"
}

var req = http.request(opciones, (respuesta) => {
    //la respuesta es un canal de lectura
    respuesta.on("data",(chunk)=>{
      console.log(chunk.toString());
    })

    respuesta.on("end", ()=>{
      console.log(respuesta.headers);
    })
})

req.end();//inicia la comunicacion
console.log("Petición lanzada.");
