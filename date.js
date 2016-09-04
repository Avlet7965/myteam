var express = require('express');
var app = express();

var moment = require('moment');
moment().format();

app.get('/yesterday',function(req,res){

var a = Date();
 var b = moment().format('MMMM Do YYYY, h:mm:ss a');
  res.send( a +"</br>" + b);

});

app.listen(1212,function(){
  console.log("Hi Avlet");
});
