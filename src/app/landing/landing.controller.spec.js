(function() {
  'use strict';

  describe('controllers', function() {
    var controller;

    beforeEach(module('curoPortal'));
    beforeEach(inject(function(_$controller_) {
      controller = _$controller_('LandingController');
    }));
  });
})();
