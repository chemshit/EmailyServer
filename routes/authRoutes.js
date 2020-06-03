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

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout(); // passport includes this function to remove cookie.
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        //passport includes user object into request
        res.send(req.user);

    });
};