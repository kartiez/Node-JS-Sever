var express = require("express");
var server  = express();
var getData = require(__dirname + '\\assets\\js\\getData.js');
var bodyParser = require('body-parser');
var path = require('path');

server.use('/Appify', express.static('assets'))
server.use('/Appify', express.static('assets/views'))

server.get('/pie',function(req,res){

   getData.PaidandFreeCount(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
   });
});
server.get('/bargraph',function(req,res){

   getData.CategoryGroup(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
   });
});
server.get('/tabledata',function(req,res){
   getData.Top10Apps(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
   });
});
server.get('/average',function(req,res){
   getData.CategoryAVG(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
   });
});
server.get('/price',function(req,res){
   getData.CategoryPrice(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
   });
});
server.listen(6789);
console.log("Running at Port 6789");
