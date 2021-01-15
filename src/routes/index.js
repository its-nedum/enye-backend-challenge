const express = require('express');

const router = express.Router();
const rates = require('../controllers/RateController');

router.get('/rates', rates.getRates);


module.exports = router;
