//Enrutador del
const express = require('express');
var router = express.Router();

var contadorVisitas = (req,res,next)=>{

  if (req.session.vistas == undefined) {
    req.session.vistas = 0
  }

  req.session.vistas++
  next()

}

//cada vez que se ejecuta una peticion al enrutador se ejecutan primero
//las funciones que están en use, se pueden validar datos, manejar sesiones
//esto es llamado middleware
router.use(contadorVisitas);

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
  console.log(req.body);
  console.log(req.output);
  res.send("Petición recibida.")
})

module.exports = router;
