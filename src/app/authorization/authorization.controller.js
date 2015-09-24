(function () {
    'use strict';

    angular
        .module('app')
        .controller('AuthorizationController', AuthorizationController);

    function AuthorizationController($state, Oauth) {
        var vm = this;
        initialize();

        function initialize() {
            var uri = URI();
            vm.code = uri.search(true).code;
            Oauth.getAccessToken(vm.code).then(function() {
                var previousState = Oauth.getPreviousState() || 'movies_trending';
                $state.go(previousState);
            });
        }
    }
})();
