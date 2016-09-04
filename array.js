var express = require('express');
var app  =  express();


var planets = [{
              name :"Sun",
              color:"blue",
              order: 1
            }]

app.get('/',function(req,res){
    var data = ''
    data += '<table>'
    for (var i in palnets){
      var planet = planets[i]
      data += `<tr>
              <td> ${planet.name}</td>
              </tr>`
    }
    data += '</table>'
    res.send(data)
});

 app.get('/',function(req,res){
   console.log(planets);
 });

app.listen(1212,function(){
  console.log("HI AVLET");
});
