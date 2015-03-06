/**
 * Commonly used routes. All other routes should be imported inside this block, passing the app and the route.
 * @param app
 * @param passport
 */
module.exports = function(app, passport) {

  // All second level APIs are in different files and are imported here.
  require('./users')(app,passport,utils);

  //Get Package information
  var pkgInfo = require('../package.json');

  //Import utils
  var utils = require('./utils/utils');

  /**
   * GET home page.
   */
  app.get('/unauthorized', function (req, res, next) {
    res.send({
      api: pkgInfo.properName,
      version: pkgInfo.version,
      context: req.route.path,
      data: 'Unauthorized landing page'
    });
  });

  /**
   * GET home page.
   */
  app.get('/', utils.isLoggedIn, function (req, res, next) {
    res.send({
      api: pkgInfo.properName,
      version: pkgInfo.version,
      context: req.route.path,
      data: res.body
    });
  });

  /**
   * GET Logout
   */
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  /**
   * Process the signup form
   */
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/unauthorized', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  /**
   * Process the login form
   */
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/unauthorized', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

};

