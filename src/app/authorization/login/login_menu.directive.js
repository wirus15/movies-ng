(function() {
    'use strict';

    angular
        .module('app')
        .directive('loginMenu', LoginMenu);

    function LoginMenu(Oauth, Token) {
        return {
            restrict: 'AE',
            templateUrl: 'app/authorization/login/login_menu.html',
            scope: {},
            link: link
        };

        function link(scope) {
            scope.login = login;
            scope.logout = logout;
            scope.isLogged = isLogged;
        }

        function login() {
            Oauth.authorize();
        }

        function logout() {
            Token.remove();
        }

        function isLogged() {
            return Token.isValid();
        }
    }
})();
