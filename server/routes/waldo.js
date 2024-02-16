const express = require('express');

const router = express.Router();

// Require controller modules.
const playerController = require('../controllers/playerController');

router.get('/', playerController.index);

module.exports = router;
