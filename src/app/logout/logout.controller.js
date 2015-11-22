(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($location, UserResource) {
    var controller = this;
    UserResource.logout();
    $location.path('/');
  }
})();
