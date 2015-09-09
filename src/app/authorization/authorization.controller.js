(function () {
    'use strict';

    angular
        .module('app')
        .controller('AuthorizationController', AuthorizationController);

    function AuthorizationController(Oauth) {
        var vm = this;
        vm.authorize = Oauth.authorize;
    }
})();
