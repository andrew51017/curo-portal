(function() {
  'use strict';

  angular
    .module('curoPortal')
    .config(config);

  /** @ngInject */
  function config($logProvider. $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Enable CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
})();
