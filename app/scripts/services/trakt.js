(function () {
  'use strict';

  angular
    .module('app')
    .factory('Trakt', Trakt);

  Trakt.$inject = ['$http', 'apiBaseUrl'];

  function Trakt($http, apiBaseUrl) {
    var $this = this;
    $this.apiBaseUrl = apiBaseUrl;//'http://127.0.0.1/trakt/proxy.php?csurl=https://api-v2launch.trakt.tv';
    $this.apiVersion = 2;
    $this.clientId = '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08';
    $this.secret = 'f5c3f0c3c7f825f73e689488ae03c5dda18425f472f4e3890d69c709dd5a683f';

    $this.config =  {
        'Content-Type': 'application/json',
        'trakt-api-key': '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08',
        'trakt-api-version': 2
    };

    return {
      getPopularMovies: getPopularMovies
    };

    function getPopularMovies() {
      return $http({
        method: 'GET',
        headers: $this.config,
        data: '',
        url: $this.apiBaseUrl + '/movies/popular'
      });
    }
  }
})();
