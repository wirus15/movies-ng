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
      .when('/movies/:category/:page?', {
        templateUrl: 'views/movies/list.html',
        controller: 'moviesListController'
      })
      .otherwise({
        redirectTo: '/movies/trending'
      });
  }

  function interceptors($httpProvider) {
    $httpProvider.interceptors.push('proxy');
    $httpProvider.interceptors.push('trakt');
  }

})();
