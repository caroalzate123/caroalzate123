const { Router } = require('express');
const path = require('path');
const router = Router ();


router.get('/',(req,res) =>{
  res.send('mi primera clase backend');
  });

  router.get("/saludo", (req, res) => {
  res.send('Hola caro bienvenida');
});

module.exports = router;
