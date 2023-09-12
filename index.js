var express = require('express');
var path = require('path');
var app = express();
var folder = path.join(__dirname, 'public');
app.use(express.json());
app.use(express.static(folder));

app.listen(5000, function(){
  
  console.log("Servidor arriba en 5000");
});
