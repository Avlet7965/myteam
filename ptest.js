var express = require('express');
var app = express();



var planets = [
               {
                name:"Mercuey",
                color:"gray",
                order: 1
              },
              {
               name:"Venus",
               color:"pale yellow",
               order: 2
             },
             {
              name:"Earth",
              color:"blue",
              order: 3
            }
            ]

app.get('/',function(req,res){
   
});

app.listen(1222,function(){
  console.log("RIGHT");
});
