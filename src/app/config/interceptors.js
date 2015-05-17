(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($httpProvider) {
        $httpProvider.interceptors.push('proxy');
        $httpProvider.interceptors.push('trakt');
    }

})();
