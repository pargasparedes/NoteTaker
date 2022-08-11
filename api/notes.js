const express = require('express');
const router = express.Router();
const data = require('../db/db.json')

router.get('/notes', (req, res) => { 
   res.json(data);
});

module.exports = router;