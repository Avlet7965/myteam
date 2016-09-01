var express = require('express');
var app = express();


app.use(express.static('images'))

app.get('/',function(req,res){
  res.send(`
            <html>
            <body>
            <form action='/home' method=get/>
            Enter Age : <input type="text" name="age">
            <input type="submit" value="submit">
            </body>
            </html>
         `)
  });

app.get('/home',function(req,res){

if(req.query.age<=25)
{
  res.send("Hello You are"+" "+ req.query.age + " " + "old"+ " " + `<img src="one.png">`)
}
else if((req.query.age>=26)&&(req.query.age<=50))
{
  res.send("Hello You are"+" "+ req.query.age + " "+ "old" +"  "+`<img src="two.png">`)
}
else if((req.query.age>=51)&&(req.query.age<=100))
  {
    res.send("Hello You are"+" "+ req.query.age + " "+"old" + `<img src="three.png">`)
  }
  else {
    res.send("Try Again");
  }
});

app.listen(1212,function(){
  console.log('Hi Avlet');
});
