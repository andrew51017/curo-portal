(function() {
  'use strict';

  angular
    .module('curoPortal')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($log, UserResource, MenuResource) {
    var controller = this;
    var restaurantId;

    UserResource.getRestaurant(function (restaurant) {
      restaurantId = restaurant.id;
      loadMenuItems();
    });

    function loadMenuItems(){
      MenuResource.loadMenu(restaurantId, function(menuItems) {
        controller.menuItems = menuItems;
      });
    }

    controller.saveMenuItem = function(menuItem) {
      menuItem.restaurant_id = restaurantId;
      MenuResource.saveMenuItem(menuItem, function() {
        loadMenuItems();
      })
    };

    controller.deleteMenuItem = function(menuItem) {
      MenuResource.deleteMenuItem(menuItem, function() {
        loadMenuItems();
      })
    };
  }
})();
