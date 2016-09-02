var express = require ('express');
var app = express();

app.get('/',function (req,res)
 {

       console.log(req.query);

        res.send(`
          <html>
          <body>
          <form action = '/welcome'  method = get />
           Enter Name : <input type = "text" name = "name"><br/>
           Enter BirthYear  : <input type = "number" name = "age">
          <input type = "submit" value = "submit" >
          </body>
          </html>
          `)

 app.get('/welcome',function (req,res)
  {
     console.log(req.query);
     var a = new Date();
     var b = a.getFullYear() - req.query.age
    //res.send(`Hello world ${req.query.name} - Age ${req.query.name}`)
 res.send("Hello World"+ req.query.name + ". " +"You are" + " " + b + " " +"Yers old.");

 })
 });/
//
// app.get('/date',function(req,res){
//
// var year = 2016;
// //var age = year
//
//   res.send(`
//          <html>
//          <body>
//          <form action = '/date'  method = get />
//          Enter Name : <input type = "text" name = "name"><br/>
//          Enter birthdate : <input type = "text" name = "year">
//          <input type = "submit" value = "submit" >
//         </body>
//         </html>
//
//
//           `)
// });
app.listen(3000,function ()
 {
           console.log("hello world");
});
