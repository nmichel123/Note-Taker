var fs = require("fs");
var util = require("util");
var note = require("../db/db.json");


module.exports = function (app) {

    
    app.get("/api/notes", function (req, res) {
        res.json(note)
        return readFile("../db/db.json", "utf8")
        
    }); 

    app.post("/api/notes", function (req, res) {
       res.json(note)
      

    });

    app.post("/api/clear/:id", function (req, res){
        
    

    });
};
