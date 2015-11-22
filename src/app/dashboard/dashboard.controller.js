(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log, UserResource, BookingsResource) {
    var controller = this;
    //controller.bookings = {events: []};
    //var restaurantId;
    //
    //UserResource.getRestaurant(function (restaurant) {
    //  restaurantId = restaurant.id;
    //  loadBookings();
    //});
    //
    //function loadBookings() {
    //  BookingsResource.loadBookings(restaurantId, function(bookings) {
    //    controller.bookings = {events: []};
    //    for (var i = 0; i < bookings.length; i++) {
    //      var date = bookings[i].date;
    //      controller.bookings.events.push(
    //        {title: date, start: date}
    //      )
    //    }
    //  })
    //}

    // TODO: Replace with api call
    controller.bookings = {
      events: [
        {
          title: 'Holiday Inn Christmas party',
          start: '2015-11-23'
        },
        {
          title: 'Chain reaction Christmas party',
          start: '2015-11-24'
        }
      ]
    };

    //controller.uiConfig = {
    //  calendar: {
    //
    //  }
    //}
  }
})();
