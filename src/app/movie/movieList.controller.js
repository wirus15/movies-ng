(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieListController', MovieListController);

    function MovieListController($scope, $state, MovieListResource) {
        var vm = this;
        vm.movies = [];
        vm.category = $state.params.category;
        vm.page = parseInt($state.params.page) || 1;
        vm.nextPage = nextPage;
        vm.scrollEnabled = true;
        initialize();

        function initialize() {
            $scope.$watch('movieListCtrl.category', function() {
                vm.page = 1;
                vm.movies = [];
            });

            $scope.$watch('movieListCtrl.page', loadMovies);
        }

        function loadMovies() {
            vm.scrollEnabled = false;
            var params = { page: vm.page };
            switch (vm.category) {
                case 'trending':
                    MovieListResource.trending(params, appendMovies);
                    break;
                case 'popular':
                    MovieListResource.popular(params, appendMovies);
                    break;
            }
        }

        function appendMovies(movies) {
            vm.movies.push.apply(vm.movies, movies);
            vm.scrollEnabled = true;
        }

        function nextPage() {
            vm.page = vm.page + 1;
        }
    }
})();
