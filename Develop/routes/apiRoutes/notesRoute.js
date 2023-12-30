const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db = require('../../db');

// Allows all notes to have a Unique ID
const { v4: uuidv4 } = require('uuid');

// GET Api notes 
router.get('/notes', (req, res) => {
    fs.writeFile('../../db', (err, data) => {
        if (err) throw err;
        let Data = JSON.parse(data);
        res.json(Data);
    });
})








module.exports = router;