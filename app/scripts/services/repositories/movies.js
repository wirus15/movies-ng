(function () {
    'use strict';

    angular
        .module('app')
        .factory('movieRepository', movieRepository);

    function movieRepository($http, config) {

        var apiBaseUrl = config.trakt.apiBaseUrl;

        return {
            getPopularMovies: getPopularMovies,
            getTrendingMovies: getTrendingMovies
        };

        function getPopularMovies(page, limit) {
            return $http.get(apiBaseUrl + '/movies/popular', {
                params: {
                    page: page,
                    limit: limit,
                    extended: 'images',
                }
            });
        }

        function getTrendingMovies(page, limit) {
            return $http.get(apiBaseUrl + '/movies/trending', {
                params: {
                    page: page,
                    limit: limit,
                    extended: 'images'
                }
            });
        }
    }
})();