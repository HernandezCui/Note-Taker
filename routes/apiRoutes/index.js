const router = require('express').Router();
const fs = require('fs');
const path = require('path');


// Read the db.json file 
const dbPath = path.join(__dirname, '../../db/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// GET /api/notes - Return all notes 
router.get('/api/notes', (req, res) => {
    res.json(db);
});

// POST /api/notes - add new notes 
router.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Date.now().toString(); // Assign unique id

    // save the updated file 
    fs.writeFileSync(dbPath, JSON.stringify(db));
    res.json(newNote);
});

// Delete note by ID 
router.delete('/api/notes/:id', (req,res) => {
    const noteId = req.params.id;
    const index = db.findIndex((note) => note.id === noteId);

    if (index !== -1) {
        db.splice(index, 1);

        //save updated db.json file 
        fs.writeFileSync(dbPath, JSON.stringify(db));
        res.json({ success: true });
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

module.exports = router;