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
      .when('/logout', {
        controller: 'LogoutController',
        controllerAs: 'controller'
      })
      .when('/profile', {
        title: 'Curo | Profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'controller',
        css: 'app/profile/css/profile.css'
      })
      .when('/dashboard', {
        title: 'Curo | Dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'controller',
        css: 'app/dashboard/css/dashboard.css'
      })
      .when('/bookings', {
        title: 'Curo | Bookings',
        templateUrl: 'app/bookings/bookings.html',
        controller: 'BookingsController',
        controllerAs: 'controller'
      })
      .when('/menu', {
        title: 'Curo | Menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'controller',
        css: 'app/menu/css/menu.css'
      })
      .when('/reviews', {
        title: 'Curo | Reviews',
        templateUrl: 'app/reviews/reviews.html',
        controller: 'ReviewsController',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
