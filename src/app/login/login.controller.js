(function() {
    'use strict';

    angular
        .module('curoPortal')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log, $location, UserResource, ApplicationUser) {
        var controller = this;
        controller.alerts = [];

        controller.login = function (username, password) {
            ApplicationUser.login({username: username, password: password}, function(response) {
                if (response.user !== undefined) {
                  UserResource.setUser(response.user);
                  $location.path('/dashboard');
                }
            }, function() {
              controller.alerts.push({type: 'danger', msg: 'Incorrect username or password'});
            });
        };
    }
})();
