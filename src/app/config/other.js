(function () {
    'use strict';

    angular
        .module('app')
        .config(configureLocation)
    ;

    function configureLocation($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

})();
