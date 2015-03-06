/**
 * Route middleware to make sure a user is logged in
 */
module.exports = {

    'isLoggedIn' : function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    console.log("I was in the logged in method")

    // if they aren't redirect them to the home page
    res.redirect('/unauthorized');
}};