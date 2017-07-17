const Eventos = require("events")

class Carro extends Eventos {
  constructor() {
    super()
    this.contador = 0;
  }

  arrancar(){
    console.log("El carro arranca.");
    this.contador++;
    this.emit("arranco", this.contador);
  }

}

var carro1 = new Carro();

//se registra el evento de la siguiente forma
carro1.on('arranco', function(c){
  console.log("El contador va en: "+c);
  console.log("El evento fue escuchado y la secuencia de codigo ejecutada.");
})

carro1.arrancar()
carro1.arrancar()
carro1.arrancar()
carro1.arrancar()
