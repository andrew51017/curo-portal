(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('LandingController', LandingController);

  /** @ngInject */
  function LandingController($log) {
    var controller = this;
    controller.text = "Hello";
    ApplicationUser.login({username: 'neil.armstrong', password: 'password'}, function(err, accessToken) {
      $log.log(err);
      $log.log(accessToken);
    });
  }
})();
