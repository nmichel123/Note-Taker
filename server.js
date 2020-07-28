var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./Develop/routes/apiRoutes");

app.get("/", function (req,res){
    
})

app.listen(PORT, function (){
    console.log ("App listening on: localhost:" + PORT )
});