const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'local';
const config = require(`./src/configs/config.${environment}`);

app.get('/gay', (req,res)=>{
    res.send('I am gay');
})

app.listen(config.app.port,()=>{
    console.log(`Running on host:${config.database.host}`);
})