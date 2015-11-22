(function() {
    'use strict';

    angular
        .module('curoPortal')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log, $location, $scope, ApplicationUser) {
        var controller = this;
        $scope.alerts = [];
        controller.login = function (username, password) {
            ApplicationUser.login({username: username, password: password}, function(err, accessToken) {
                if (accessToken !== undefined) {
                    $location.path('/dashboard');
                } else {
                    // display error
                }
            });
        };
    }
})();
