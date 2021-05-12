// *********************************************
// modules used                               
// *********************************************

const stockInfo = require('../seeder/stockInfo');

// *********************************************

async function searchStock(symbol) {
    try {
        let ticker = {
            symbol: symbol
        };
        return (!ticker.symbol) ? [] : await stockInfo.getStockQuote(ticker);
    } catch (error) {
        console.log('searchStock: ' + error);
    }
}

/* exports */
module.exports = {
    searchStock
}