var fs = require("fs")
var note = require("../db/db.json")

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(note);
    }); 



    app.post("/api/notes", function (req, res){
        
    });


    app.post("/api/clear", function (req, res){
        destroy(note)
    })
};
