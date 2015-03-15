// app/models/trips.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var notificationSchema = mongoose.Schema({

    notification_id     : String, //object ID (assign from _id)
    user_id             : String,
    type                : String, //One from ./utils/notification_types.js
    message             : String,
    created_at          : Date
});

// methods ======================
//TODO

// create the model for users and expose it to our app
module.exports = mongoose.model('Vehicle', notificationSchema);