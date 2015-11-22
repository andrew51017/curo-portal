(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, MenuResource) {
    var controller = this;


    controller.menuItems = [
      {type: 'Starter', name: 'Duck', price: '2.50'},
      {type: 'Starter', name: 'Soup', price: '2.50'},
      {type: 'Main', name: 'Steak', price: '2.50'},
      {type: 'Main', name: 'Pizza', price: '2.50'},
      {type: 'Dessert', name: 'Ice-cream', price: '2.50'},
      {type: 'Dessert', name: 'Cake', price: '2.50'}
    ]
  }
})();
