const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to do list items array
let items = ["Wake up", "Exist", "Survive"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {

	var today = new Date();

	var options = {
		weekday:"long",
		day: "numeric",
		month: "long"
	};

	var day = today.toLocaleDateString("en-us", options);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {
	var item = req.body.newItem;

//does not push item if input is empty	
	if(item !== "") {
	   items.push(item);
	}	

	res.redirect("/");
})


app.listen(3000, function () {
	console.log("Server started on port 3000"); 
});
