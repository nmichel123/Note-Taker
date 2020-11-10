var fs = require("fs");
var util = require("util");
var notes = require("../db/db.json");
var express = require("express");

var notesList = []
var idsList = []


module.exports = function (app) {

  app.get("/api/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../db/db.json"))
  });

  app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "notes.html"))
  })

  app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

app.post("/api/notes", function(req, res) {
  let savedNotes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
  let newNote = req.body;
  let uniqueID = (savedNotes.length).toString();
  newNote.id = uniqueID;
  savedNotes.push(newNote);

  fs.writeFileSync("../db/db.json", JSON.stringify(savedNotes));
  console.log("Note saved to db.json. Content: ", newNote);
  res.json(savedNotes);
});

    // app.get("/api/notes", function (req, res) {
    //     return fs.readFile("../db/db.json", "utf-8")
    //     .then(note =>{
    //         console.log(note)
    //         res.json(note)
    //     })
        
    // }); 

    // app.get("/api/notes", function(req, res) {
    //     var chosen = req.id.notes;
      
    //     console.log(chosen);
      
    //     for (var i = 0; i < notes.length; i++) {
    //       if (chosen === notes.id) {
    //         return res.json(notes.id);
    //       }
    //     }
      
    //     return res.json(false);
    //   });
      


    // app.post("/api/notes", function (req, res) {
        
    //     var newNote = req.body;

    //     newNote.title = newNote.text.replace(/\s+/g, "").toLowerCase();
      
    //     console.log(newNote);
      
    //     notesList.push(newNote);

    //     idsList.push(newNote)
      
    //     res.json(newNote);
    //   });
    
};
