(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($log, UserSession, ApplicationUser, Restaurant) {
    var controller = this;
    controller.user = UserSession.getUser();
    UserSession.getRestaurant(function(restaurant) {
      controller.restaurant = restaurant;
    });

    controller.saveAccount = function() {
      ApplicationUser.Update(user, handleError);
    };

    controller.saveRestaurant = function() {
      if (controller.restaurant.location instanceof Object) {
        controller.restaurant.location = controller.restaurant.location.name;
      }

      if (controller.restaurant.id === undefined) {
        controller.restaurant.userId = controller.user.id;
        Restaurant.create(controller.restaurant, handleError);
      } else {
        Restaurant.update(controller.restaurant, handleError);
      }
    };

    function handleError(error) {
      if (error !== undefined) {
        $log.log(error);
      }
    }
  }
})();
