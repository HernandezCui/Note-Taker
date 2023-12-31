const router = require('express').Router();
const path = require('path');

// GET notes - Return to notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET * - Return the index.html 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;