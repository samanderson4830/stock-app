// *********************************************
// modules used                               
// *********************************************

const express = require('express');
const url = require('url');
const router = express.Router();
const searchStock = require('../controller/searchStock');
const login = require('../controller/login');

/**************** get request *****************/

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/searchStock', async (req, res) => {
    let urlParts = url.parse(req.url, true);
    let query = urlParts.query;
    res.render('stockQuote', { title: 'Stock Quote', quote: await searchStock.searchStock(query.symbol) });
});

router.get('/profile', checkAuthenticated, (req, res) => {
    let user = req.user;
    res.render('profile', { user });
});

router.get('/logout', (req, res) => {
    res.clearCookie('session-token');
    res.redirect('/login')
});

/**************** post request ****************/

router.post('/login', async (req, res) => {
    let token = req.body.token;
    try {
        await login.verify(token);
        res.cookie('session-token', token);
        res.send('success');
    } catch (error) {
        console.log('login ' + error);
    }
});

/**************** extra methods ***************/

async function checkAuthenticated(req, res, next) {
    let token = req.cookies['session-token'];

    try {
        const ticket = await login.verify(token);
        let user = {};
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
        req.user = user;
        next();
    } catch (error) {
        console.log('checkAuthenticated ' + error);
        res.redirect('/login')
    }
}

/* exports */
module.exports = router;