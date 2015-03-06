/**
 * All user related services.
 * @param app
 * @param passport
 * @param utils
 */
module.exports = function(app, passport, utils) {

  var user_route = '/users';

  //sample
  app.get(user_route + '/:name/authenticate', function (req, res, next) {
    res.send({name: 'user ' + req.params.name});
  });

  //get user details
  app.get(user_route + '/:userId/details', function (req, res, next) {
    res.send({name: 'user ' + req.params.userId});
  });

};