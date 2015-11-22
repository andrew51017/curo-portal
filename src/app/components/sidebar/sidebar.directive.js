(function() {
  'use strict';

  angular
    .module('curoPortal')
    .directive('sideBar', sideBar);

  /** @ngInject */
  function sideBar() {
    return {
      restrict: 'E',
      scope: {
        // Add scope values here, defined like <my-directive my-value="blah"/>
        // Note that camel-cased scopes defined here are represented differently in html (myDirective becomes my-directive).
      },
      templateUrl: 'app/components/sidebar/sidebar.html',
      link: linkFunc,
      controller: Controller,
      controllerAs: 'controller'
    };

    function linkFunc(scope, el, attr, controller) {

    }

    /** @ngInject */
    function Controller(UserResource) {
      var controller = this;
      controller.user = UserResource.getUser();
    }
  }
})();
