/**
 * All user related services.
 * @param app
 * @param passport
 * @param utils
 */
module.exports = function(app, passport, utils) {

  var user_route = '/users';

  //Get Package information
  var pkgInfo = require('../package.json');

  //Import utils
  var utils = require('./utils/utils');

  //sample
  app.get(user_route + '/:name/authenticate', function (req, res, next) {
    res.send({name: 'user ' + req.params.name});
  });

  //get user details
  app.get(user_route + '/:userId/details', function (req, res, next) {
    res.send({name: 'user ' + req.params.userId});
  });

  /**
   * List users by
   *  ~
   */
  app.get(user_route + '/list', utils.isLoggedIn, function (req, res, next) {
    res.send({
      api: pkgInfo.properName,
      version: pkgInfo.version,
      context: req.route.path,
      data: res.body
    });
  });

};