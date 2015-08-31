(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('movies', {
                url: '/movies/{category}/{page}',
                templateUrl: 'views/movies/list.html',
                controller: 'moviesListController'
            });

        $urlRouterProvider.otherwise('/movies/trending/');
    }

})();
