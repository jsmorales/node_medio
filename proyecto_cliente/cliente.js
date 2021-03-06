//cliente HTTP/HTTPS para GitHub
//github.com/users/jsmorales

/*recomendacion utilizar directorios temporales
para crear logs que indiquen la actividad reciente
de la aplicacion
*/
//const fs = require("fs");

class Cliente {
  //las clases mas comunes serian get y post
  constructor(host, puerto, protocolo){
    this.host = host;
    this.puerto = puerto;
    this.protocolo = protocolo;
    //pudiese ir los headers para sesiones

    //validacion del protocolo
    if (protocolo != "http" && protocolo != "https") {
      console.log("Error de protocolo.");
    }

    /*[para crear directorios temporales se escribe]
    this.logDir = fs.mkdtempSync("/tmp/cliente-http-");
    (esto crea el directorio temporal con una identificacion
    aleatoria)
    */
  }

  //metodo de autenticacion HTTP BASIC
  autenticarBasic(user,pass){
    //Buffer pertenece al API de node.js (objeto buffer para poderlo codificar)
    //https://nodejs.org/api/buffer.html#buffer_buffer
    this.basicAuth = new Buffer(user+":"+pass).toString("base64");
  }

  //funcion para procesar headers para mantener sesion -> se realiza en la peticion request
  procesarHeaders(){

    var headers = {
      "Accept": "*/*",
      //muy importante para los permisos del server
      //en GitHub, sin este header no funciona.
      "User-Agent": "Cliente Node.js"
    }
    //laautenticacion se guarda en los headers

    //si el metodo de basicAuth no esta definido
    if (this.basicAuth != undefined) {
      headers.Authorization = "Basic "+this.basicAuth;
      console.log("Autenticando por header: "+headers.Authorization);
    }else{
      console.log("No se ha especificado autenticación.");
    }

    return headers;
  }

  //Método para realizar peticiones de tipo get
  get(uri, data, callback){

    var opciones = {
      hostname: this.host,
      port: this.puerto,
      method: 'GET',
      path: this.protocolo+"://"+this.host+uri,
      headers: this.procesarHeaders()
    }

    this.request(opciones, null, callback);
  }

  post(uri, data, callback){
    var opciones = {
      hostname: this.host,
      port: this.puerto,
      method: 'POST',
      path: this.protocolo+"://"+this.host+uri,
      headers: this.procesarHeaders()
    }

    this.request(opciones, data, callback);
  }

  //para el manejo de peticiones
  // request (manejo de peticiones)
  request(opciones, data, callback) {
      // http o https
      var http = require(this.protocolo); //http, o https
      var respuesta = {
          status: null,
          body: "",
          headers: null
      };
      var peticion = http.request(opciones, (canalRespuesta) => {
          canalRespuesta.on('data', (chunk) => {
              respuesta.body += chunk;
          });
          canalRespuesta.on('end', () => {
              respuesta.status = canalRespuesta.statusCode;
              respuesta.headers = canalRespuesta.headers;
              //fs.appendFile(this.logDir + "/cliente.log", "lorem ipsum");
              callback(respuesta);
          });
      });

      if (data != undefined && data != null) {
          var body = JSON.stringify(data);
          peticion.setHeader('Content-Length', Buffer.byteLength(body));
          peticion.setHeader('Content-Type', 'application/json');
          peticion.write(body);
      }
      peticion.end();
  }
  //----------------------------
}

module.exports = Cliente;
