(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movies', {
                url: '/movies/{category}',
                templateUrl: 'app/movie/movieList.html',
                controller: 'MovieListController',
                controllerAs: 'movieListCtrl'
            })
            .state('oauth_authorization', {
                url: '/oauth/authorization',
                templateUrl: 'app/authorization/authorization.html',
                controller: 'AuthorizationController',
                controllerAs: 'authorizationCtrl'
            })
            .state('oauth_token', {
                url: '/oauth/token/{code}',
                templateUrl: 'app/authorization/token.html',
                controller: 'TokenController',
                controllerAs: 'tokenCtrl'
            })
        ;

        $urlRouterProvider.otherwise('/movies/trending');
    }

})();
