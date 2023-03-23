const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// POST /api/notes
router.get('/', notesCtrl.index);

module.exports = router;