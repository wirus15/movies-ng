(function () {
  'use strict';

  angular
    .module('app', [
      'ngAnimate',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'infinite-scroll',
      'oauth'
    ])
    .config(config);

  function config($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    states($stateProvider, $urlRouterProvider);
    interceptors($httpProvider);
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  function states($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies/{category}/{page}',
        templateUrl: 'views/movies/list.html',
        controller: 'moviesListController'
      });

    $urlRouterProvider.otherwise('/movies/trending/');
  }

  function interceptors($httpProvider) {
    $httpProvider.interceptors.push('proxy');
    $httpProvider.interceptors.push('trakt');
  }

})();
