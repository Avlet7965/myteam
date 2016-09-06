var express = require('express');
var app = express();

var url = require('url');

var planets = [
               {
                name:"Mercuey",
                color:"gray",
                order: 1
              },
              {
               name:"Venus",
               color:"yellow",
               order: 2
             },
             {
              name:"Earth",
              color:"blue",
              order: 3
            }
            ]
var index  = '';
app.get('/planet/:colorindex',function(req,res){
 var data = '';
     data += `<html>
              <body>
              <head>
              <style>
                 body{background: ${planets[req.params.colorindex].color}}
                 
              </style>
              </head>
              <table>`
     for(var i in planets){
       var planet = planets[req.params.colorindex]
       data += `<tr>
                <td><${planet.name}</td>
                <td>${planet.color}</td>
                <td>${planet.order}</td>
                </tr>`
      }
      data +=`</table>
              </body>
               </html>`

      res.send(data);

});


app.listen(3000,function(){
  console.log('Hello World');
});
