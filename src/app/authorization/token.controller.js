(function () {
    'use strict';

    angular
        .module('app')
        .controller('TokenController', TokenController);

    function TokenController(Oauth, $stateParams, $state) {
        var vm = this;
        initialize();

        function initialize() {
            Oauth.getAccessToken($stateParams.code).then(function(token) {
                console.log('Logged! Access token: ' + token);
                $state.go('movies', {category: 'trending'});
            })
        }
    }
})();
