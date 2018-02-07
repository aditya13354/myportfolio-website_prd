// ____________REQUIRE NODE MODULES & SET MIDDLEWARE____________

// express - lets us use dynamic data within our views
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Tell our app where to find the slick JavaScript for the Portfolio page images
// not sure if this is best practice but it works
app.use("/slick", express.static(__dirname + "/node_modules/slick-carousel/slick"));

// serve-favicon - let's us use a custom image for the favicon
// I don't have a custom favison yet
// var favicon = require("serve-favicon");
// app.use(favicon(__dirname + "/public/img/file-name.png"));

// morgan - lets us log HTTP requests in terminal
var morgan = require("morgan");
app.use(morgan("tiny")); // less text in our logs??

// dotenv - lets us use SECRET global variables
require('dotenv').load();

// hide my email address for GitHub




// ____________ROUTES____________


// ROOT
app.get("/", function(req, res){
	res.send("/index");
});

// INDEX PAGE


// FALLBACK ROUTE
app.get("*", function(req, res){
	res.render("errors/404", {email:lindsayEmailAddress, path:req.url});
});



//____________START SERVER____________

// process.env.PORT is whatever port we tell Heroku as an environment variable
app.listen(3000, function(){
	console.log("Server starting on port: 8080");
});


