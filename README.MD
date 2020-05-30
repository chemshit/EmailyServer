# Emaily

Study Project for Stephen Grider's Node with React: Fullstack Web Development Udemy course

## Emaily Server

Express and Node part of the project. That will take list of e-mails and send out surveys
those surveys will be used for.

to start it

`node index.js`

and it will run on localhost:5000.

### Preperations

You need to create a config folder and add keys.js that keys.js file should be look like below:

```
module.exports = {
    googleClientID: 'ClientID pasted here',
    googleClientSecret: 'Client Secret pasted here'
};
```

## Course Features

    - Will be deployed on Heroku
    - Google OAuth Authentication
    - Payment from Stripe from e-mail
    - Campaign Creation

## I want to include

    - E-mail authentication , facebook authenticaiton
