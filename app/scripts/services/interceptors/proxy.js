(function () {
  'use strict';

  angular
    .module('app')
    .factory('proxy', proxy);

  proxy.$inject = ['$location', 'config'];

  function proxy($location, config) {

    return {
      request: modifyRequest
    };

    /**
     * @param {*} params
     * @returns {*}
     */
    function modifyRequest(params) {
      if (proxyingRequired(params.url)) {
        params.url = config.proxy + params.url;
      }

      return params;
    }

    /**
     * @param {string} url
     * @returns {boolean}
     */
    function proxyingRequired(url) {
      if (
        /^http[s]?:\/\//.test(url) &&
        url.indexOf(config.proxy) !== 0 &&
        isSameOrigin(url) === false
      ) {
        return true;
      }

      return false;
    }

    /**
     * @param {string} url
     * @returns {boolean}
     */
    function isSameOrigin(url) {
      var location = document.createElement('a');
      location.href = url;

      if (
        location.protocol === $location.protocol() &&
        location.hostname === $location.hostname() &&
        location.port === $location.port()
      ) {
        return true;
      }

      return false;
    }
  }
})();
