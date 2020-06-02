const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


//Passport Library knows how to authentica but don't now specifics
//So we are making it learn how to connect it.

//Google (i need to check other ones as well) will send code too callback URL
//we need to configure that part in GoogleStrategy configuration as well


//Explanation: passport.use takes Strategy while creating strategy we give 
//GoogleStrategy with configuration and callback function
//This callback function will take profile info and do something with it
// something is done through mongoose. We create a new model instance (thinh like User object where 
//constructor created through schema). we will take inputs from profile.
// new User({bla:bla}) that creates only instance of model to push it to mongoDB then
// we call save() function.

const User = mongoose.model('users');


// serializeUser determines which data of the user object should be stored in the session.
// There is a visual explanation for serialize and deserialize under code.
passport.serializeUser((user, done) => {
    /**
    first one is error objech , user is taken from mongo db this is not profile id this is new User or existingUser.
    user.id is a shortcut to mongoDB _id uniquely identified user. profile id is googleId why 
    we are using mongo identifier because we could have multiple authentication.
     */
    done(null, user.id);

});


//finds users with user.id (mongoDB id) then pushes it through done function
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true  //If you trust it. This is to solve google authentication problem
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser); // This is to inform google done(err,user,)
            }

            const user = await new User({ googleId: profile.id }).save();
            done(null, user);

        }
    )
);




/** Nice Visual explanation from Stackoverflow:
 * https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
passport.serializeUser(function(user, done) {
    done(null, user.id);
});              │
                 │
                 │
                 └─────────────────┬──→ saved to session
                                   │    req.session.passport.user = {id: '..'}
                                   │
                                   ↓
passport.deserializeUser(function(id, done) {
                   ┌───────────────┘
                   │
                   ↓
    User.findById(id, function(err, user) {
        done(err, user);
    });            └──────────────→ user object attaches to the request as req.user
});
 */

 //done function to inform passport is result of transaction