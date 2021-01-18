const express = require('express');

const router = express.Router();
const rates = require('../controllers/RateController');

// the rates endpoint route 
router.get('/rates', rates.getRates);


module.exports = router;
