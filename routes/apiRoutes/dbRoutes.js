const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = displayNewNote(req.body, notes);
    res.json(note)
});

module.exports = router; 