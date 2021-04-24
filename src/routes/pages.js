// *********************************************
// modules used                               
// *********************************************

const express = require('express');
const stockInfo = require('../seeder/stockInfo');

/*************** Global Variable ***************/

const router = express.Router();

// *********************************************

router.get('/',  (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/stock-quote', async (req, res) => {
    var ticker = {
        symbol: 'AAPL',
    };
    res.render('stockQuote', { title: 'Stock Quote', quote: await stockInfo.getStockQuote(ticker) });
});

/* exports */
module.exports = router;