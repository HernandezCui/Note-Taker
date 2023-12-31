const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Get api notes - Retrieve all notes
router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFile('../../db/db.json', 'utf8'));
    res.json(notes);
});

// POST api notes - Create a new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4(); // assign a unique id
    const notes = JSON.parse(fs.readFile('../../db/db.json', 'utf8'));
    notes.push(newNote);
    fs.writeFile('../../db/db.json', JSON.stringify(notes));
    res.json(newNote);
});

// DELETE api notes - DElETE a note by ID 
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    let notes = JSON.parse(fs.readFile('../../db/db.json', 'utf8'));
    notes = notes.filter((note) => note.id !== noteId);
    fs.writeFile('../../db/db.json', JSON.stringify(notes));
    res.json({ msg: 'Note Deleted successfully' });
});

module.exports = router;