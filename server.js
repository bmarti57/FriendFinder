var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 8081;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT);
console.log("Listening on: " + PORT);

