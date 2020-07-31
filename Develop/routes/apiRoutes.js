var fs = require("fs");
var util = require("util");
var note = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile("../db/db.json")
        res.json(note);
    }); 

    app.post("/api/notes", function (req, res) {
        const userNote = {};
        userNote.body = req.body.newNote
        note.push(userNote);
        res.redirect('/');
    });

    app.post("/api/clear", function (req, res){
        destroy(note).replace(/\s+/g, "").toLowerCase();
    })
};
