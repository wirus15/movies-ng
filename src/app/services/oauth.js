(function() {
    'use strict';

    angular
        .module('app')
        .service('Oauth', Oauth);

    function Oauth(config, $window, $http, Token) {
        var vm = this;
        vm.authorize = authorize;
        vm.getAccessToken = getAccessToken;
        vm.redirectUri = 'http://localhost:3000/oauth.html';

        function authorize() {
            var url = URI('http://trakt.tv/oauth/authorize').query({
                response_type: 'code',
                client_id: config.trakt.clientId,
                redirect_uri: vm.redirectUri
            });

            $window.location.href = url;
        }

        function getAccessToken(code) {
            return $http.post('http://trakt.tv/oauth/token', {
                code: code,
                client_id: config.trakt.clientId,
                client_secret: config.trakt.secret,
                redirect_uri: vm.redirectUri,
                grant_type: 'authorization_code'
            }).then(function(response) {
                var token = response.data.access_token;
                Token.set(token);

                return token;
            });
        }
    }

})();