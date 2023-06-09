//import express, body-parser
const express = require('express');
const bodyParser =require("body-parser");
const {listBanksController,createBankController,updateBankController,deleteBankController}= require('./controllers');

//create express server instance
const server=express();

//Middlewares
server.use(bodyParser.json());


//routes
// view banks-get method
server.get('/bank',listBanksController);

//create bank-post method
server.post('/bank',createBankController );

//update bank-put method
server.put('/bank', updateBankController);


//delete bank-delete method
server.delete('/bank', deleteBankController)


//start server
server.listen(3000, ()=>console.log('server is ready'));


