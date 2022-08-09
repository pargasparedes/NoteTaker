const express = require('express');
const path = require('path');
const notesRoute = require('./routes/notes')

const PORT = 3001;
const app = express();

app.use(express.static('public'));

//Sending index.html as main page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Sending notes.html when entering /notes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// app.get('/notes', function(req, res) {
//     res.sendFile(path.join(__dirname, '/public/assets/js/index.js'));
// });
// app.get('/notes', function(req, res) {
//     res.sendFile(path.join(__dirname, '/public/assets/css/style.css'));
// });

//Importing api routes
app.use('/api', notesRoute);

app.listen(PORT, () => {
    console.log("Server running on port 3001");
});