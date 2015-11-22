(function() {
  'use strict';

  angular
    .module('curoPortal')
    .factory('BookingsResource', bookingsResource);

  /** @ngInject */
  function bookingsResource(Bookings) {
    var bookingsResource = this;

    bookingsResource.loadBookings = function(restaurantId, success) {
      Bookings.find({
        filter: {
          where: {
            restaurant_id: restaurantId
          }
        }
      }).$promise.then(success)
    };

    return bookingsResource;
  }
})();
