(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('BookingsController', BookingsController);

  /** @ngInject */
  function BookingsController($log, UserResource, BookingsResource) {
    var controller = this;
    var restaurantId;

    UserResource.getRestaurant(function (restaurant) {
      restaurantId = restaurant.id;
      loadBookings();
    });

    function loadBookings() {
      BookingsResource.loadBookings(restaurantId, function(bookings) {
        controller.bookings = bookings;
      })
    }
  }
})();
