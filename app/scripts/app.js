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
      'infinite-scroll'
    ])
    .config(config);

  function config($stateProvider, $httpProvider, $urlRouterProvider) {
    states($stateProvider, $urlRouterProvider);
    interceptors($httpProvider);
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
