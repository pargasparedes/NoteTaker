const express = require('express');
const router = express.Router();
const data = require('../db/db.json')
const uuid = require('../helpers/uuid');
const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/notes', (req, res) => { 
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedNotes = JSON.parse(data);
          res.json(parsedNotes);
        }
      });
});

router.post('/notes', (req, res) =>{
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
          title,
          text,
          note_id: uuid(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
              const parsedNotes = JSON.parse(data);
      
              parsedNotes.push(newNote);
      
              // Write updated notes back to the file
              fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
              );
            }
          });

        const response = {
            status: 'success',
            body: newNote,
          };
      
          console.log(response);
          res.status(201).json(response);
        } else {
          res.status(400).send('Error in saving note');
        }
});

module.exports = router;