var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('Hello World');
});

app.listen(1212,function(){
  console.log('Start')
});