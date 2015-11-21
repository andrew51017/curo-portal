(function() {
  'use strict';

  angular
    .module('curoPortal')
    .directive('directiveExample', directiveExample);

  /** @ngInject */
  function directiveExample() {
    var directive = {
      restrict: 'E',
      scope: {
        // Add scope values here, defined like <my-directive my-value="blah"/>
        // Note that camel-cased scopes defined here are represented differently in html (myDirective becomes my-directive).
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: Controller,
      controllerAs: 'controller'
    };

    return directive;

    function linkFunc(scope, el, attr, controller) {

    }

    /** @ngInject */
    function Controller(/* Inject dependencies here */) {

    }
  }
})();
