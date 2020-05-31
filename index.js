const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User'); // Model should come before passport because we are saving inside passport.js file. It is a tricky
//passport.js is not returning anything with 
//export so i take everythin by only using require.
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();


//app.use includes middlewares to preprocess incoming requests
//Instead of adding user info every route request middlewares are used
//If you don't want to include middleware a specific request that is also possible.

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 100, //30 days
        keys: [keys.cookieKey]

    })
);

app.use(passport.initialize());
app.use(passport.session());

/**When we require authRoutes it will return 
function (arrow function we route just next to
module.export). second paranthesis with app argument
will execute function. Totally make sense
*/
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
