const router = require('express').Router();
const fs = require('fs');
const path = require('path');


// Read the db.json file 
const dbPath = path.join(__dirname, '../../db/db.json');

// GET /api/notes - Return all notes 
router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    res.json(notes);
});

// POST /api/notes - add new notes 
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Date.now().toString(); // Assign unique id
    const notes = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    notes.push(newNote);
    // save the updated file 
    fs.writeFileSync(dbPath, JSON.stringify(db));
    res.json(newNote);
});

// Delete note by ID 
router.delete('/notes/:id', (req,res) => {
    const noteId = req.params.id;
    const notes = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    fs.writeFileSync(dbPath, JSON.stringify(updatedNotes));
    res.json({ success: true });
});

module.exports = router;