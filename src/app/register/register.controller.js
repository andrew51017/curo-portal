(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($log, ApplicationUser) {
    var controller = this;

    controller.register = function() {
      controller.user.username = controller.user.email;
      ApplicationUser.create(controller.user);
    }
  }
})();
