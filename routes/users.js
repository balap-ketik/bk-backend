const express = require('express');
const router = express.Router();
const {signIn} = require('../controllers/controller.user')


/* GET users listing. */
router.post('/',signIn)

module.exports = router;
