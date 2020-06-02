# Emaily

Study Project for Stephen Grider's Node with React: Fullstack Web Development Udemy course

## Emaily Server

Express and Node part of the project. That will take list of e-mails and send out surveys
and collect results.

to start development environment.

`npm run dev`

and it will run on localhost:5000.

### Preperations

You need to create a config folder and add dev.js file should be look like below containing development keys.

```
module.exports =
    googleClientID: '<ClientID pasted here>',
    googleClientSecret: '<Client Secret pasted here>',
    mongoURI: '<Mongo URI will be here>'
    cookieKey: '<Cookie Key>'
};
```

If you want to push project to heroku you need to set process.env variables that you could find variables in `config/prod.js`.

## Course Features

- Will be deployed on Heroku
- Google OAuth Authentication
- Payment from Stripe from e-mail
- Campaign Creation

## I want to include

- E-mail authentication , facebook authenticaiton
- Update Cookie Session and use Express-Session to keep session reference
- Include JWT
