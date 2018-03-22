const express = require('express');
const router = express.Router();
const { addOnlinePlayer, showOnlinePlayer, deleteOnlinePlayer } = require('../controllers/playerOnline')

/* GET users listing. */
router
.post('/', addOnlinePlayer)
.get('/', showOnlinePlayer)
.delete('/', deleteOnlinePlayer)

module.exports = router;