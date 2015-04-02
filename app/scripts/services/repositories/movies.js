(function () {
  'use strict';

  angular
    .module('app')
    .factory('movieRepository', movieRepository);

  movieRepository.$inject = ['$http', 'config'];

  function movieRepository($http, config) {

    var apiBaseUrl = config.trakt.apiBaseUrl;

    return {
      getPopularMovies: getPopularMovies,
      getTrendingMovies: getTrendingMovies,
    };

    function getPopularMovies() {
      return $http.get(apiBaseUrl + '/movies/popular');
    }

    function getTrendingMovies() {
      return $http.get(apiBaseUrl + '/movies/trending');
    }
  }
})();