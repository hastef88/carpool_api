/**
 * Possible notifications within a car pooling event lifecycle.
 */
module.exports = {
    'types' : {
        passenger_request   : "passenger_request",
        passenger_confirmed : "passenger_confirmed",
        trip_due_reminder   : "trip_due_reminder",
        passenger_missed    : "passenger_missed"
        //TODO we have more events to add here.
    }
};