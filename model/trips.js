// app/models/trips.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var tripSchema = mongoose.Schema({

    trip_id             : String,
    host_user_id        : String,
    from                : String,
    to                  : String,
    start_time          : Date,
    confirmed_passengers: [Number],
    requested_passengers: [Number],
    host_wait_time_max  : String
});

// methods ======================
//TODO add methods to
//  list trips with filters (from, to, start_time, host_wait_time_max, availability)
//  delete a trip
//  Add function supported with mongoose.
//  Update a trip

// create the model for users and expose it to our app
module.exports = mongoose.model('Trip', tripSchema);