
define(function(require, exports, module) {
  var Utils, demoPackage, packages, server;
  demoPackage = require('packages/demo');
  Utils = require('shared/utils');
  packages = Utils.getPackagesRoutes([demoPackage.Controller]);
  if (module.config().fakeServer) {
    server = require('server');
    server.start();
  }
  exports.App = Backbone.Router.extend(_.extend({}, packages.methods, {
    routes: _.extend({}, packages.routes, {
      '*other': 'unknownRoute'
    }),
    unknownRoute: function() {
      return console.log('unknown');
    }
  }));
});
