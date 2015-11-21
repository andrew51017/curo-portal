(function() {
  'use strict';

  angular
    .module('curoPortal')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        title : 'Curo',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'controller',
        css: 'app/landing/css/landing.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
