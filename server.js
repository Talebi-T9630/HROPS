const express = require('express');
const mysql = require('mysql2');
const app = express();
const environment = process.env.NODE_ENV || 'local';
const config = require(`./src/config/config.${environment}`);
const userRoute = require('./src/routes/user');


app.get('/test', (req,res)=>{
    res.send(`I am  test`);
})

app.use('/user',userRoute);

app.listen(config.app.port,()=>{    
    console.log(`Running on host:${config.app.host}`);
})



