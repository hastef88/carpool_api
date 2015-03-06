// This gets the app ref in order to use the express service functions
app = require('../app');

// All second level APIs are in different files and are imported here.
require('./users');

//Package information
var pkgInfo = require('../package.json');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send({
    api : pkgInfo.properName,
    version : pkgInfo.version,
    context : req.route.path,
    data : "Welcome !!"
  });
});
