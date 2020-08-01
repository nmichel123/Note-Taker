var fs = require("fs");
var util = require("util");
var notes = require("../db/db.json");

var notesList = []
var idsList = []


module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        return fs.readFile("../db/db.json", "utf-8")
        .then(note =>{
            console.log(note)
            res.json(note)
        })
        
    }); 

    app.get("/api/notes", function(req, res) {
        var chosen = req.id.notes;
      
        console.log(chosen);
      
        for (var i = 0; i < notes.length; i++) {
          if (chosen === notes.id) {
            return res.json(notes.id);
          }
        }
      
        return res.json(false);
      });
      


    app.post("/api/notes", function (req, res) {
        
        var newNote = req.body;

        newNote.title = newNote.text.replace(/\s+/g, "").toLowerCase();
      
        console.log(newNote);
      
        notesList.push(newNote);
      
        res.json(newNote);
      });
    
};
