const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '994183022360-jbfsjqqgjs674j72t91tt15iovmhvv55.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    });

    return ticket;
}


/* exports */
module.exports = {
    verify
}