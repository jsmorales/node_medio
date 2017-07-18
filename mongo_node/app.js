//conexion a la base de datos mongobd
var cliente = require("mongodb").MongoClient;

//cadena de conexion puerto 27017
var cadena_con = "mongodb://127.0.0.1:27017/mibase"

//iniciar la conexion
cliente.connect(cadena_con, (err, db) => {
  //colecciones [como una tabla en sql]
  /*db.collection("animales").insertOne(//se inserta un valor
      {
        name:"Red",
        especie: "Tigre"
      }, (err, result) => {//luego se busca con findOne y se muesrta el resultado
        db.collection("animales").findOne((err, res) => {
          console.log(res);
          //cierra la base de datos
          db.close()
        })
  })*/

  db.collection("animales").findOne((err, res) => {
    console.log(res);
    //cierra la base de datos
    db.close()
  })

})
