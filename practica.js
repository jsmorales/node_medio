//programacion OO (POO)
//ES6 clases
var objeto = function(){

}

objeto.prototype = {
  saludar : function(msg){
    console.log(msg);
  },
  despedirse : function(){
    console.log("Adiós!");
  }
}

var obj = new objeto()

obj.saludar("Hola desde objeto")
obj.despedirse()
