const express = require('express');
const app = express();
const studentRoute = require('./api/routes/students'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Middleware


mongoose.connect('---------Your mongo atlas connection string---------');
mongoose.connection.on('error',err=>{
    console.log("connextion failed"+err);
});

mongoose.connection.on('connected',status=>{
    console.log('Mongo connected.....');
});

app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

app.use('/student',studentRoute);


//This will execute when no route is found
app.use((request,response, next)=>{
response.status(404).json({
    message:"Bad request"
});
}) ;

module.exports = app; 