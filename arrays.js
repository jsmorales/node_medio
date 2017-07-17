//manipulacion for each con flecha
var arr = [2,5,6,65,45,90.45]
arr.forEach((valor,index) => console.log(index+"--"+valor));
//----------------------------------------------------------

//----------------------------------------------------------
//filter [retorna los valores que den verdadero de la funcion
//ejecutada, generando un nuevo array]
var res_filter = arr.filter( (valor) => valor % 2 == 0 ? true : false)
console.log(res_filter);
//----------------------------------------------------------

//----------------------------------------------------------
//manipulacion de datos con map
//ejecuta una operacion con cada uno de los valores del
//array generando un array nuevo
var res_map = arr.map( (valor) => valor*2 )
/*Las funciones se pueden encadenar de la siguiente forma:
sacando todos los valores del array elevados al cuadrado y
filtrando cuales son los números pares
//var res_map = arr.map( (valor) => valor*2 ).filter( (valor) => valor % 2 == 0 ? true : false)
*/
console.log(res_map);
//----------------------------------------------------------

//----------------------------------------------------------
//reduce -- reducir el array a un resultado unico
//retorna el resultado de los valores manipulados

//obtiene la suma de todos los valores del array
var res_reduce = arr.reduce( (acumula, valorA) => acumula+valorA, 0)

console.log(res_reduce);
//----------------------------------------------------------
