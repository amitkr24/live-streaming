const express = require('express');
const router = express.Router();
const liveStreaming = require('../controllers/liveStreaming');
router.get('/', liveStreaming.index);
router.get('/room', liveStreaming.room);

module.exports = router;
