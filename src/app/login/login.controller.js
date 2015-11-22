(function() {
    'use strict';

    angular
        .module('curoPortal')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log, $location, UserSession, ApplicationUser) {
        var controller = this;
        controller.alerts = [];
        controller.login = function (username, password) {
            ApplicationUser.login({username: username, password: password}, function(response) {
                if (response.user !== undefined) {
                  UserSession.setUser(response.user);
                  $location.path('/dashboard');
                } else {
                  $log.log('Could not authenticate');
                }
            });
        };
    }
})();
