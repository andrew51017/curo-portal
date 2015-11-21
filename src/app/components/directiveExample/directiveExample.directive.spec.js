(function() {
  'use strict';

  describe('directive example', function() {
    var controller;
    var element;

    beforeEach(module('curoPortal'));
    beforeEach(inject(function($compile, $rootScope, githubContributor, $q) {
      spyOn(githubContributor, 'getContributors').and.callFake(function() {
        return $q.when([{}, {}, {}, {}, {}, {}]);
      });

      element = angular.element('<directive-example></directive-example>');

      $compile(element)($rootScope.$new());
      $rootScope.$digest();
      controller = element.isolateScope().controller;
    }));
  });
})();
