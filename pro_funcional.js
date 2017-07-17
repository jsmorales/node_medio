//----------------------------------------------------------
/*Fundamentos de programacion funcional

-->Inmutabilidad -- trabajo con valores
*/
var a = [0,3,7]
//a[0] = 10//esto no es funcional! porque no es inmutable

//esto si es funcional
var b = a.map( (valor) => valor*2 )
console.log(a+" -- "+b);
//----------------------------------------------------------

//----------------------------------------------------------
/*
-->Funciones como parametros o retornar funciones para poder
crear nuevas funciones a partir de estas.
[*Se puede reutilizar código]
*/

var suma = function(a,b){
  return a + b
}

var suma2 = function(a){
  return function(b){
    return a + b
  }
}

var suma10 = suma2(10)

console.log(suma(2,2));

console.log(  suma2(2)(90)  );

console.log(  suma10(2)  );
//-----------------------------------------------------------

//-----------------------------------------------------------
/*
-->Siempre se debe regresar un resultado unico
las funciones que tienen mas de 1 resultado posible no son
funcionales como la raiz cuadarada de 4 que es 2 y también -2
*/
//-----------------------------------------------------------
