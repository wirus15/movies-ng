(function() {
    'use strict';

    angular
        .module('app')
        .service('Oauth', Oauth);

    function Oauth($window, $http, $state, config, Token) {
        var vm = this;

        vm.authorize = authorize;
        vm.getAccessToken = getAccessToken;
        vm.getPreviousState = getPreviousState;

        function authorize() {
            sessionStorage.previousState = $state.current.name;
            $window.location.href = URI('http://trakt.tv/oauth/authorize').query({
                response_type: 'code',
                client_id: config.trakt.clientId,
                redirect_uri: $state.href('oauth_authorization', {}, {
                    absolute: true
                })
            });
        }

        function getAccessToken(code) {
            return $http.post('http://trakt.tv/oauth/token', {
                code: code,
                client_id: config.trakt.clientId,
                client_secret: config.trakt.secret,
                redirect_uri: $state.href('oauth_authorization', {}, {
                    absolute: true
                }),
                grant_type: 'authorization_code'
            }).then(function(response) {
                var token = response.data.access_token;
                Token.set(token);

                return token;
            });
        }

        function getPreviousState() {
            var state = sessionStorage.previousState;
            sessionStorage.removeItem('previousState');

            return state;
        }
    }

})();