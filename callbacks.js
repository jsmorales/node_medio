//----------------------------------------------------------------------------
var objeto = function(){}

objeto.prototype = {
  saludar : function(msg, callback){
    console.log(msg);
    //callback()
    //console.log(typeof callback)
    //validacion de que la variable es una función y nos de resultados
    //inesperados.
    if (typeof callback == "function") {
      callback()
    }else{
      throw new Error("El parámetro debe ser una función.");
    }
  },
  despedirse : function(){
    console.log("Adiós!");
  }
}

var obj = new objeto()
/**/
obj.saludar("Hola desde objeto", function(){
  console.log("ya saludé, y ahora?...");
  obj.despedirse()
})
//obj.saludar("Hola desde objeto",3)
//----------------------------------------------------------------------------
