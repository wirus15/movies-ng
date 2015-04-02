(function () {
  'use strict';

  angular
    .module('app')
    .factory('proxy', proxy);

  angular
    .module('app')
    .config(['$httpProvider', registerInterceptor]);

  proxy.$inject = ['config'];

  function proxy(config) {
    var $this = this;
    $this.config = config;

    return {
      request: modifyRequest
    };

    function modifyRequest(params) {
      var requestUrl = params.url;
      var proxyUrl = $this.config.proxy;

      if (
        proxyUrl !== undefined &&
        /http[s]?:\/\//.test(requestUrl) &&
        requestUrl.indexOf(proxyUrl) === -1
      ) {
        params.url = proxyUrl + requestUrl;
      }

      return params;
    }
  }

  function registerInterceptor($httpProvider) {
    $httpProvider.interceptors.push('proxy');
  }
})();
