var express = require("express");

var app = express();

app.get("/", function(request, response){
    console.log("There is GET request for the home page!");
    response.send("Here is the GET method!");
})

app.post("/", function(request, response){
    console.log("A POST request for the homepage is accessed.");
    response.send("Here is the POST method!");
})

app.get("/profile", function(request, response){
    console.log("My Profile:");
    response.send("My name is Sebastian C. Canlas!");
})

app.get("/list_user", function(request, response){
    console.log("Got a GET request for /list_user");
    response.send("This is Page Listing");
})

app.get("/ab*cd", function(request, response){
    console.log("Got a GET request for /ab*cd");
    response.send("Pattern Match Page");
})

var server = app.listen(4000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s !!!", host, port)
})





