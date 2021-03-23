var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
const PORT = process.env.PORT || 8080;

app.get("/", function (req, res){
    var json = require(__dirname + "/exampledata.json")
    res.render("pages/index");
    console.log(json);
})

app.get("*", function(req, res){
    res.send("Can't find the requested page", 404)
});

app.listen(PORT, function(){
    console.log("Server is running!")
});