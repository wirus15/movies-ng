(function() {
    'use strict';

    angular
        .module('app')
        .service('Token', Token);

    function Token($cookies) {
        var vm = this;
        vm.get = getToken;
        vm.set = setToken;
        vm.remove = remove;
        vm.isValid = isValid;

        function getToken() {
            $cookies.get('access_token');
        }

        function setToken(token) {
            $cookies.put('access_token', token);
        }

        function remove() {
            $cookies.remove('access_token');
        }

        function isValid() {
            return !!$cookies.get('access_token');
        }
    }

})();