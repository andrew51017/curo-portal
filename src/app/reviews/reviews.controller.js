(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('ReviewsController', ReviewsController);

  /** @ngInject */
  function ReviewsController($log) {
    var controller = this;

    controller.reviews = [
      {rating: 4, comment: 'Great!'}
    ]
  }
})();
