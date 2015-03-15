// app/models/trips.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var passengerSchema = mongoose.Schema({

    trip_id             : String,
    passenger_id        : String,
    pickup_from         : String,
    drop_to             : String,
    pickup_time         : Date,
    confirmed           : Boolean,
    wait_time_max       : String
});

// methods ======================
//TODO add methods to
//  list passengers for a given trip (confirmed, unconfirmed)
//  Add a passenger as a request
//  Confirm/ Reject a passenger on "request" state
//  Delete a passenger
//  Update a passenger (when this is called, a new request notification should go to trip host user.)

// create the model for users and expose it to our app
module.exports = mongoose.model('Passenger', passengerSchema);