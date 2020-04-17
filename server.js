var express = require("express");
var server  = express();
var bodyParser = require('body-parser');
var path = require('path');

server.use('/Appify', express.static('assets'))
server.use('/Appify', express.static('assets/views')) //PLACE YOUR HTML FILES HERE...

server.get('/YOUR_URL',function(req,res){

   getData.YOUR_FUNCTION_NAME(function (data){
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data); // SEND DATA TO THE FRONT END
   });
});

server.listen(6789);
console.log("Running at Port 6789");
