(function() {
  'use strict';

  angular
    .module('curoPortal')
    .factory('MenuResource', menuResource);

  /** @ngInject */
  function menuResource(Menu) {
    var menuResource = this;

    menuResource.saveMenuItem = function(menuItem) {
      if (menuItem.id === undefined) {
        
      }
    }

    return menuResource;
  }
})();
