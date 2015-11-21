(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var controller = this;
    controller.text = "Hello";
  }
})();
