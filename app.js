const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

//to do list items array
const items = ["Code", "Nap", "Code some more"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function (req, res) {

	const day = date.getDate();

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {
	
	const item = req.body.newItem;

//does not push item if input is empty	
	if(item !== "") {
	   items.push(item);
	}	

	res.redirect("/");
})


app.listen(3000, function () {
	console.log("Server started on port 3000"); 
});
