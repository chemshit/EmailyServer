const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


//Passport Library knows how to authentica but don't now specifics
//So we are making it learn how to connect it.

//Google (i need to check other ones as well) will send code too callback URL
//we need to configure that part in GoogleStrategy configuration as well


passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('profile : ', profile);
            console.log('done', done);
        }
    )
);