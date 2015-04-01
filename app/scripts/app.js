(function () {
    'use strict';

    angular
        .module('app', [
            'ngAnimate',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(Config)
        .constant('apiBaseUrl', 'http://127.0.0.1/trakt/proxy.php?csurl=https://api-v2launch.trakt.tv');

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
