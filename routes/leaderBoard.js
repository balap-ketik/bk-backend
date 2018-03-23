const express = require('express');
const router = express.Router();

const {getAllScore,addScore} = require('../controllers/leaderBoard.controller')


router.get('/',getAllScore)
router.post('/',addScore)

module.exports = router