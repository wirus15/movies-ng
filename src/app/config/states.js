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
                controller: 'MovieListController',
                controllerAs: 'movieListCtrl'
            });

        $urlRouterProvider.otherwise('/movies/trending');
    }

})();
