var express = require('express');
var app = express();

app.get('/',function(req,res){

var a = Date();

  res.send(a);
});

app.listen(1212,function(){
  console.log("Hi Avlet");
});