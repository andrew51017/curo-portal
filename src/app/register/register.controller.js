(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($log, $location, UserResource, ApplicationUser) {
    var controller = this;
    controller.alerts = [];

    controller.register = function() {
      controller.user.username = controller.user.email;
      ApplicationUser.create(controller.user, function(response) {
        if (response.user !== undefined) {
          UserResource.setUser(response.user);
          $location.path('/dashboard');
        }
      }, function() {
        controller.alerts.push({type: 'danger', msg: 'Could not create an account, please try again.'});
      });
    }
  }
})();
