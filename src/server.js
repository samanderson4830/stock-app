// *********************************************
// modules used                               
// *********************************************

const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const dotenv = require('dotenv');
const path = require('path');

/*************** Global Variable ***************/

const app = express();
const port = process.env.PORT_NUMBER || 3000;

// *********************************************

app.set('view engine', 'hbs');
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
hbs.registerPartials('../src/views/partials');

/* serve static files */
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config({ path: '.env' });

app.use('/', require(path.join(__dirname, 'routes', 'pages')));

app.listen(port, () => {
    console.log('Server started on port ' + port);
});