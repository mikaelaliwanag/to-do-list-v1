const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function(req, res){
  
    var today = new Date();
    var currentDay = today.getDay();

})


app.listen(8080, function(){
    console.log("Server started on port 8080");
});