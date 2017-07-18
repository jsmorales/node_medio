//Enrutador del
const express = require('express');
var router = express.Router();

//------------------------------------------------------------------------
//Middlewares

var validacionContenido = (req, res, next) => {

  //var tipo_json = req.get("content-type") === "application/json";
  var tipo_json = req.get("content-type") === "text/plain";

  if (!tipo_json) {
    res.status(403).send("Error tipo de dato de petición inválido.")
  }

  next()
}

var contadorVisitas = (req,res,next) => {

  if (req.session.vistas == undefined) {
    req.session.vistas = 0
  }

  req.session.vistas++;

  next()

}
//------------------------------------------------------------------------
//cada vez que se ejecuta una peticion al enrutador se ejecutan primero
//las funciones que están en use, se pueden validar datos, manejar sesiones
//esto es llamado middleware
router.use(validacionContenido);
router.use(contadorVisitas);
//------------------------------------------------------------------------

router.get("/", (req,res)=>{
  //probando la sesion existente
  console.log(req.session);

  res.send("Respondiendo con un recurso animales. Este recurso ha sido visitado "+req.session.vistas+" veces.")
})

//esta ruta permite que sea dinámico el nombre de usuario
//permitiendo el enrutamiento variable
router.get("/:animal", (req,res)=>{
  var animal = req.params.animal;
  res.send("Consultando animal: "+animal)
})

router.post("/",(req,res,next)=>{

  /*//validando el contendio
  console.log(req.body);
  //validando tipo del body
  console.log(typeof req.body);
  //validar tipo de contenido
  console.log(req.get("content-type") === "application/json");*/

  if (!req.session.animales) {
    req.session.animales = []
  }

  req.session.animales.push(req.body);
  console.log(req.session);
  res.send("Petición recibida.")

})

module.exports = router;
