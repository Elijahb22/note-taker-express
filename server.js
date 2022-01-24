const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express(); 
//express middleware
app.use(express.static('public'));
//parse incoming string/array of data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//call for the live server
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
})