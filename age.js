var express = require('express');
var app = express();

app.use(express.static('images'));

app.get('/',function(req,res){

  res.send(`
    <html>
    <body>
    <form action = '/home'  method = get />
     Enter Age  : <input type = "number" name = "age">
    <input type = "submit" value = "submit" >
    </body>
    </html>
    `)

});

app.get('/home',function(req,res){
  console.log(res.query);
  var age = req.query.age
  res.send("Hello You are"+ age + "Yers old.");
});


app.listen(3000,function(){
  console.log('Hello');
});



// var data = ''
// <style>
// background: ${planet.color}
// </style>
//
//
//  var data = ''
//  var i = req.params.index
//  var planet = planets[i]
