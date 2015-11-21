(function() {
  'use strict';

  angular
    .module('curoPortal')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
