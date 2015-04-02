(function () {
  'use strict';

  angular
    .module('app')
    .factory('trakt', trakt);

  angular
    .module('app')
    .config(['$httpProvider', registerInterceptor]);

  trakt.$inject = ['config'];

  function trakt(config) {
    var $this = this;
    $this.config = config;

    return {
      request: modifyRequest
    };

    function modifyRequest(params) {
      var requestUrl = params.url;
      if (requestUrl.indexOf($this.config.trakt.apiBaseUrl)) {
        addHeaders(params);
      }

      return params;
    }

    function addHeaders(params) {
      var headers = {
        'Content-Type': 'application/json',
        'trakt-api-key': $this.config.trakt.clientId,
        'trakt-api-version': $this.config.trakt.apiVersion
      };

      angular.extend(params.headers, headers);
    }
  }

  function registerInterceptor($httpProvider) {
    $httpProvider.interceptors.push('proxy');
  }
})();
