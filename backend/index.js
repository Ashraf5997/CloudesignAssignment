
const express     =   require('express');
const bodyParser  =   require('body-parser');
const cors        =   require('cors');
const app         =   express();
//const path        =   require("path");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config( );

const taskRoutes            = require('./src/routes/taskmanagement.route');

const port     =  process.env.PORT || 9060;
const baseUrl  = '/api/v1';

// TASK ROUTES
app.use(baseUrl,taskRoutes);

app.get("/",(req,res)=>{
  
    res.send(
         "<div style='background-color:black;text-align:center;height:100%'><h3 style='padding:150px;color:blue;text-decoration:underline'> WELCOME  TO  MEAN STACK  BACKEND  APPLICATION </h3> </div>"
    );
})

app.all('*' , (req , res , next)=>{

     const err       = new Error(`Requested url ${req.path} is not valid`);
     err.statusCode  = 404;
     next(err);
})

// GLOBAL ERROR HANDLER
app.use((err , req , res , next ) =>{

      const statusCode = err.statusCode || 500;

      res.status(statusCode).json({
         success :0,
         message : err.message,
         stack   : err.stack
      })
})


//listining the port
app.listen(port,()=>{
    console.log("Express server is running at PORT "+port);
})

         ///////////////////////////////////////////////////////////////////////////////////////////////

