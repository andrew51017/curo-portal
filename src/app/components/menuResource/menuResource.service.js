(function() {
  'use strict';

  angular
    .module('curoPortal')
    .factory('MenuResource', menuResource);

  /** @ngInject */
  function menuResource(Menu) {
    var menuResource = this;

    menuResource.loadMenu = function(restaurantId, success) {
      Menu.find({
        filter: {
          where: {
            restaurant_id: restaurantId
          }
        }
      }).$promise.then(success)
    };

    menuResource.saveMenuItem = function(menuItem, success) {
      if (menuItem.id === undefined) {
        Menu.create(menuItem, function(response) {
          menuItem.id = response.menu.id;
          success();
        });
      } else {
        Menu.update(menuItem);
        success();
      }
    };

    menuResource.deleteMenuItem = function(menuItem, success) {
      Menu.destroyById(menuItem.id, success);
    };

    return menuResource;
  }
})();
