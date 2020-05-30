const express = require('express');
require('./services/passport');


//passport.js is not returning anything with 
//export so i take everythin by only using require.


const app = express();

//When we require authRoutes it will return 
//function (arrow function we route just next to
//module.export). second paranthesis with app argument
//will execute function. Totally make sense


require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);
