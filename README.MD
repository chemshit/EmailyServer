# Emaily

Study Project for Stephen Grider's Node with React: Fullstack Web Development
Udemy course

## Emaily Server

Express and Node part of the project. That will take list of e-mails and send
out surveys and collect results. User will be authenticated through Google
Authentication API

## Emaily Client

It will be React, Redux based using React-Form and React Router. For sytling it
has used materialCSS

### Preperations

You need to create a config folder and add dev.js file should be look like below
containing development keys.

```
module.exports =
    googleClientID: '<ClientID pasted here>',
    googleClientSecret: '<Client Secret pasted here>',
    mongoURI: '<Mongo URI will be here>'
    cookieKey: '<Cookie Key>',
    stripePublishableKey: <Stripe_Publishable Ket>,
    stripeSecretKey: "Stripe Secret Key"
};
```

If you want to push project to heroku you need to set process.env variables that
you could find variables in `config/prod.js`.

```
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
```

Also React APP Environment variables should be created under `client/src` for
STRIPE Publishable keys both for `.env.development` and `.env.production`. line
should be look like below:

```
REACT_APP_STRIPE_KEY = pk_test_r6LmIqsKrirpr3dGscozSmd900HGdbbP3w
```

## Running Servers

You need to run in root folder of project `npm run dev`

and it will run on localhost:5000.

## Features of Project

- Will be deployed on Heroku prod keys will be reside on heroku
- Google OAuth Authentication
- Payment from Stripe from e-mail
  - Credit Card from will be created by Stripe
- Survey Creation

## I want to include

- E-mail authentication , facebook authenticaiton
- Usee Express-Session to keep session reference instead of cookie-session
- Include JWT
