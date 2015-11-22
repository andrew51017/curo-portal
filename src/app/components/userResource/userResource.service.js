(function() {
  'use strict';

  angular
    .module('curoPortal')
    .factory('UserResource', userResource);

  /** @ngInject */
  function userResource($cookies, $location, Restaurant) {
    var userResource = this;
    var cachedUser = undefined;

    userResource.setUser = function(user) {
      $cookies.putObject('user', user);
      cachedUser = user
    };

    userResource.getUser = function() {
      if (cachedUser === undefined) {
        cachedUser = $cookies.getObject('user');
      }

      if (cachedUser === undefined) {
        $location.path("");
      }

      return cachedUser;
    };

    userResource.logout = function() {
      $cookies.remove('user');
      cachedUser = undefined;
    };

    userResource.getRestaurant = function(success) {
      return Restaurant.findOne(
        {
          filter: {
            where: {
              user_id: userResource.getUser().id
            }
          }
        }
      ).$promise.then(success);
    };

    return userResource;
  }
})();
