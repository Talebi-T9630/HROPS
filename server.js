const express = require('express');
const mysql = require('mysql2');
const app = express();
const environment = process.env.NODE_ENV || 'local';
const config = require(`./src/configs/config.${environment}`);

// Create a connection to the database 
const connection = mysql.createConnection({ 
    host: config.dbconfig.host, 
    user: config.dbconfig.user, 
    password: 'TaraneLovesJames2020!', 
    database: config.dbconfig.database        
  });

app.get('/test', (req,res)=>{

    res.send(`I am  test`);
})


connection.connect(error =>{
    console.log(connection);
    if (error){ 
        console.log("A error has been occurred "
            + "while connecting to database.");         
        throw error; 
    } 

    app.listen(config.app.port,()=>{
        console.log(config.dbconfig);
    
        console.log(`Running on host:${config.app.host}`);
    })
})



