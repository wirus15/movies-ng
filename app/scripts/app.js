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
    .config(config);

  function config($routeProvider, $httpProvider) {
    routes($routeProvider);
    interceptors($httpProvider);
  }

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function interceptors($httpProvider) {
    $httpProvider.interceptors.push('proxy');
    $httpProvider.interceptors.push('trakt');
  }

})();
