(function() {
  'use strict';

  angular
    .module('curoPortal')
    .factory('UserSession', userSession);

  /** @ngInject */
  function userSession($cookies, $location, Restaurant) {
    var userSessionService = this;
    var cachedUser = undefined;

    userSessionService.setUser = function(user) {
      $cookies.putObject('user', user);
      cachedUser = user
    };

    userSessionService.getUser = function() {
      if (cachedUser === undefined) {
        cachedUser = $cookies.getObject('user');
      }

      if (cachedUser === undefined) {
        $location.path("");
      }

      return cachedUser;
    };

    userSessionService.getRestaurant = function(success) {
      return Restaurant.findOne(
        {
          filter: {
            where: {
              user_id: userSessionService.getUser().id
            }
          }
        }
      ).$promise.then(success);
    };

    return this;
  }
})();
