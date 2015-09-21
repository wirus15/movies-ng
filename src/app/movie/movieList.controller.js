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
        vm.scrollEnabled = true;
        vm.loading = false;
        vm.nextPage = nextPage;
        initialize();

        function initialize() {
            $scope.$watch('movieListCtrl.page', loadMovies);
        }

        function loadMovies() {
            vm.scrollEnabled = false;
            vm.loading = true;
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
            vm.loading = false;
        }

        function nextPage() {
            vm.page = vm.page + 1;
        }
    }
})();
