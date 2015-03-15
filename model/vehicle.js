// app/models/trips.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var vehicleSchema = mongoose.Schema({

    vehicle_id          : String, //object ID (assign from _id)
    user_id             : String,
    type                : String, //One from ./utils/vehicle_types.js
    brand               : String,
    model               : String,
    year                : Number,
    pooling_mileage     : Number
});

// methods ======================
//TODO add methods to
//  Add a vehicle
//  Update a vehicle
//  List Vehicles by (type, pooling_mileage, user_id)
//  Delete a vehicle
//  Update pooling_mileage after a trip

// create the model for users and expose it to our app
module.exports = mongoose.model('Vehicle', vehicleSchema);