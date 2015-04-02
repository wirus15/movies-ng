(function () {
  'use strict';

  angular
    .module('app')
    .factory('config', Config);

  function Config() {
    return {
      proxy: 'http://127.0.0.1/movies-ng/proxy.php?csurl=',
      trakt: {
        apiBaseUrl: 'https://api-v2launch.trakt.tv',
        apiVersion: 2,
        clientId: '46850385b8b30f9c03d3f9ee4d7af98825d08a868039d4cd495b757225dd3d08',
        secret: 'f5c3f0c3c7f825f73e689488ae03c5dda18425f472f4e3890d69c709dd5a683f'
      }
    };
  }

})();