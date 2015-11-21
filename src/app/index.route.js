(function() {
  'use strict';

  angular
    .module('curoPortal')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
