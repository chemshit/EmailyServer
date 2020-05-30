const passport = require('passport');


module.exports = (app) => {
    //when user goes to /auth/google it will take user to google with clientID,secret
    //google returns a callback with code to passport to get Authentication information

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

};