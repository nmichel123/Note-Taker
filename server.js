var express = require("express");
var bodyParser = require("body-parser")

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("./Develop/public/assets"));

require("./Develop/routes/apiRoutes");
require("./Develop/routes/htmlRoutes");


app.listen(PORT, function (){
    console.log ("App listening on: localhost:" + PORT )
});