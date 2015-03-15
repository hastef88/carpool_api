// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email                 : String,
        password              : String,
        mobile_no             : String,
        date_of_birth         : String,
        avatar_url            : String,
        drive_consistency     : Number, // Can increase decrease this after each car_pool is complete, based on if host was able to drive all passengers efficiently.
        report_count          : Number, // If user was reported by anybody for unexpected behaviour,
        passenger_consistency : Number  // Increase decrease based on successful trips of user as a passenger.
    },
    //TODO Below models are not used for now
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//TODO add methods to
//  list users(with filters)
//  delete a user()
//  report a user()
//  update stats after a trip
//  *Add is already there with mongoose.
//  Update user
//  Reset password.

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);