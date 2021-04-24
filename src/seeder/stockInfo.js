// *********************************************
// modules used                               
// *********************************************

const yahooStockAPI = require('yahoo-stock-api');

// *********************************************

async function getStockQuote(ticker) {
    const info = [];
    const quote = await yahooStockAPI.getSymbol(ticker.symbol);
    
    info.push({
        open: quote.response.open,
        dayRange: quote.response.dayRange,
        peRatio: quote.response.peRatio,
        oneYearTargetEst: quote.response.oneYearTargetEst,
        forwardDividendYield: quote.response.forwardDividendYield
    });

    /* print info to console */
    for (item of info) {
        console.log(item);
    }

    return info;
}

/* exports */
module.exports = {
    getStockQuote
}