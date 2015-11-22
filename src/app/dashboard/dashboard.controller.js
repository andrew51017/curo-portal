(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log) {
    var controller = this;

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
