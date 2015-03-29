(function () {
  'use strict';

  angular
    .module('app')
    .factory('Trakt', Trakt);

  Trakt.$inject = ['$http'];

  function Trakt($http) {
    var $this = this;
    $this.apiBaseUrl = 'https://api-v2launch.trakt.tv';
    $this.apiVersion = 2;
    $this.clientId = '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08';
    $this.secret = 'f5c3f0c3c7f825f73e689488ae03c5dda18425f472f4e3890d69c709dd5a683f';

    $this.config =  {
        'Content-type': 'application/json',
        'trakt-api-key': '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08',
        'trakt-api-version': 2,
        'withCredentials': true
    };

    return {
      getPopularMovies: getPopularMovies
    };

    function getPopularMovies() {
      return $http.jsonp($this.apiBaseUrl + '/movies/popular', $this.config);
    }
  }
})();
