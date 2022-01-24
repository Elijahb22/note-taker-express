const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { displayNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = displayNewNote(req.body, notes);
    res.json(note)
});
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});

module.exports = router; 