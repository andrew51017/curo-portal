(function() {
    'use strict';

    angular
        .module('curoPortal')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log, $location, ApplicationUser) {
        var controller = this;
        controller.login = function (username, password) {
            ApplicationUser.login({username: username, password: password}, function(err, accessToken) {
                if (accessToken !== undefined) {
                    $location.path('/dashboard');
                } else {
                    $log.log('Could not authenticate');
                }
            });
        };
    }
})();
