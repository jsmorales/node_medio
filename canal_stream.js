const fs = require("fs")

const readable = fs.createReadStream("./audio1.mp3");

readable.on("data", function(chunk){
  console.log("Se han recibido "+chunk.length+" bytes de data.");
  console.log(chunk);
  //readable.pause();
  /*
  console.log("En un segundo se mostrará la demás información.");
  setTimeout(function(){
    console.log("Mostrando info nuevamente.");
    readable.resume()
  }, 1000)*/
})

readable.on("end", function(){
  console.log("Finaliza la lectura.");
})

readable.on("close", function(chunk){
  console.log("Se ha cerrado el canal.");
})
