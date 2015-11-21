(function() {
  'use strict';

  angular
    .module('curoPortal')
    .run(runBlock);

  runBlock.$inject = ['$log', '$rootScope', '$route'];

  /** @ngInject */
  function runBlock($log, $rootScope, $route) {
    $log.debug('runBlock end');
    $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title;
    });
  }

})();
