(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movies_trending', {
                url: '/movies/trending',
                templateUrl: 'app/movie/list/movieList.html',
                controller: 'MovieListController',
                controllerAs: 'movieListCtrl',
                params: {
                    category: 'trending'
                }
            })
            .state('movies_popular', {
                url: '/movies/popular',
                templateUrl: 'app/movie/list/movieList.html',
                controller: 'MovieListController',
                controllerAs: 'movieListCtrl',
                params: {
                    category: 'popular'
                }
            })
            .state('movies_anticipated', {
                url: '/movies/anticipated',
                templateUrl: 'app/movie/list/movieList.html',
                controller: 'MovieListController',
                controllerAs: 'movieListCtrl',
                params: {
                    category: 'anticipated'
                }
            })
            .state('movie_details', {
                url: '/movies/:slug',
                templateUrl: 'app/movie/details/movieDetails.html',
                controller: 'MovieDetailsController',
                controllerAs: 'movieDetailsCtrl',
                resolve: {
                    movie: function($stateParams, MovieDetailsResource) {
                        return MovieDetailsResource.get({slug: $stateParams.slug}).$promise;
                    }
                }
            })
            .state('oauth_authorization', {
                url: '/oauth/authorization',
                controller: 'AuthorizationController'
            })
        ;

        $urlRouterProvider.otherwise('/movies/trending');
    }

})();
