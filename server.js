const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express(); 
//express middleware
app.use(express.static('public'));
//parse incoming string/array of data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

//call for the live server
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
})