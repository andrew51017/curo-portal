(function() {
  'use strict';

  angular
    .module('curoPortal')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }
})();
