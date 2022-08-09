const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

//Sending index.html as main page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Sending notes.html when entering /notes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


app.listen(PORT, () => {
    console.log("Server running on port 3001");
});