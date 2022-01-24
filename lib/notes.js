const fs = require('fs');
const path = require('path');
// saves a new note 
function displayNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}
// delete the note 
function deleteNote(id, notesArray) {
    const noteIndex = id - 1;
    notesArray.splice(noteIndex, 1);
    notesArray.map((note, index) => {
        note.id = index.toString();;
    })
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {displayNewNote, deleteNote};