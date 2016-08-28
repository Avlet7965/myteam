
var express = require ('express');
var app = express();

app.get('/',function (req,res)
 {

       console.log(req.query.name);

       res.send(`


         <form action = '/home'  method = get />
         enter name : <input type = "text" name = "name">

         <input type = "submit" value = "submit" >

       

         `)

app.get('/home',function (req,res)
 {

        res.send("Hello world"  + req.query.name );

})


});

app.listen(3000,function ()
 {
           console.log("hello world");

})
