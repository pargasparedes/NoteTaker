const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/api/notes', function(req, res){
    console.log("you are in /api/notes")
});

module.exports = router;