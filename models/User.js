const mongoose = require('mongoose');
const { Schema } = mongoose;


//Even though you can create collections freely
//Mongoose wants to know what property we will enter
//So we need to define schema then map model to collections.

const userSchema = new Schema({
    googleId: String,
});


mongoose.model('users', userSchema);