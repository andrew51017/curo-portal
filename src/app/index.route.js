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
      .when('/login', {
          title: 'Curo | Login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'controller'
      })
      .when('/register', {
        title: 'Curo | Register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'controller'
      })
      .when('/dashboard', {
        title: 'Curo | Dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'controller'
      })
      .when('/profile', {
        title: 'Curo | Profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
