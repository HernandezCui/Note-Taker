const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db = require('../../db');

// Allows all notes to have a Unique ID
const { v4: uuidv4 } = require('uuid');
const { notEqual } = require('assert');

// GET Api notes 
router.get('/notes', (req, res) => {
    fs.writeFile('../../db', (err, data) => {
        if (err) throw err;
        let Data = JSON.parse(data);
        res.json(Data);
    });
})

// Post api notes
router.post('/notes', (req, res) => {
    const newNote = req.body; // gets new note
    newNote.id = uuidv4(); // gives note a random id 
    db.push(newNote); 
    fs.writeFile('../../db', JSON.stringify(db)); // update file 
    res.json(db);
});

// Delete api notes
router.delete('/notes/:id', (req,res) => {
    const newDb = db.filter((note) => note.id === req.params.id);
    fs.writeFile('../../db', JSON.stringify(newDb));
    readFile.json(newDb);
});



module.exports = router;