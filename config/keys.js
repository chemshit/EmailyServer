// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    //We are in production - return the prod set of keys
    console.log("That is a production node");
    module.exports = require('./prod');
} else {
    //dev.keys
    console.log("That is a development node");
    module.exports = require('./dev');
}