const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
let data = require('../../db/db.json');

// Get api notes - Retrieve all notes
router.get('/notes', (req, res) => {
    console.log({ data });
    res.json(data);
});

// POST api notes - Create a new note
router.post('/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() };
    console.log(newNote);
    console.log(req.body);
    data.unshift(newNote);

    fs.writeFile(path.join(__dirname, '../../db/db.json'), 
    JSON.stringify(data),
    function (err) {
        if (err) {
            res.status(500).json({ error: err });
        }
        res.json(newNote);
    });
});

// DELETE api notes - DElETE a note by ID 
router.delete('/notes/:id', (req, res) => {
    data = data.filter((el) => el.id !== req.params.id);
    fs.writeFile(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(data),
        function (err) {
          if (err) {
            res.status(404).json({ error: err });
          }
          res.json(data);
        });
});

module.exports = router;