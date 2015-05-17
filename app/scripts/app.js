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

    $stateProvider.state('accessToken', {
      url: '/access_token={accessToken}&token_type={tokenType}&expires_in={expiresIn}',
      templateUrl: '',
      controller: function ($location, $state, AccessToken) {
        //var hash = $location.path().substr(1);
        //AccessToken.setTokenFromString(hash);
        //console.log(AccessToken.get());
        //$location.path('/');
        //$location.replace();
        //AccessToken.setTokenFromString($stateParams.accessToken);
        //console.log(AccessToken.get());
        window.location.href = '/#/movies/trending/1';
        //$state.go('movies', {category: 'trending', page: 1});
      }
    });

    $urlRouterProvider.otherwise('/movies/trending/');
  }

  function interceptors($httpProvider) {
    $httpProvider.interceptors.push('proxy');
    $httpProvider.interceptors.push('trakt');
  }

})();
