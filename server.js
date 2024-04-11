const express = require('express');
const mysql = require('mysql2');
const app = express();
const environment = process.env.NODE_ENV || 'local';
const config = require(`./src/config/config.${environment}`);
const userRoute = require('./src/routes/user');


// Create a connection to the database 
// const connection = mysql.createConnection({ 
//     host: config.dbconfig.host, 
//     user: config.dbconfig.user, 
//     password: config.dbconfig.password, 
//     database: config.dbconfig.database        
//   });

app.get('/test', (req,res)=>{

    res.send(`I am  test`);
})

app.use('/user',userRoute);

// connection.connect(error =>{
//     if (error){ 
//         console.log("A error has been occurred "
//             + "while connecting to database.");         
//         throw error; 
//     } 

    
// })

app.listen(config.app.port,()=>{    
    console.log(`Running on host:${config.app.host}`);
})



