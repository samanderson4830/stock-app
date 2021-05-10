// *********************************************
// modules used                               
// *********************************************

const express = require('express');
const stockInfo = require('../seeder/stockInfo');
var http = require('http');
var url = require('url');

/*************** Global Variable ***************/

const router = express.Router();
const searchStock = require('../controller/searchStock');

// *********************************************

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/searchStock', async (req, res) => {
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    res.render('stockQuote', { title: 'Stock Quote', quote: await searchStock.searchStock(query.symbol) });
});

/* exports */
module.exports = router;