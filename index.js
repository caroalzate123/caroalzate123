const express =require('express');
const path = require ('path');
const cors = require ('cors');
const app = express ();

const routers = require ('./src/routers/routers');
app.use('/api/',routers);


app.listen(3000,()=>{
  console.log('served started');
});