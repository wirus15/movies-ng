(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieListController', MovieListController);

    function MovieListController($scope, $state, MovieListResource) {
        var vm = this;
        var allMovies = [];
        vm.filteredMovies = [];
        vm.category = $state.params.category;
        vm.page = parseInt($state.params.page) || 1;
        vm.scrollEnabled = true;
        vm.loading = false;
        vm.genre = null;
        vm.nextPage = nextPage;
        vm.filter = filter;
        initialize();

        function initialize() {
            $scope.$watch('movieListCtrl.page', loadMovies);
            $scope.$watch('movieListCtrl.genre', function(genre) {
                console.log(genre);
                if (genre) {
                    vm.filteredMovies = filter(allMovies);
                } else {
                    vm.filteredMovies = allMovies.slice();
                }
            });
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
            if (movies.length > 0) {
                allMovies.push.apply(allMovies, movies);
                vm.filteredMovies.push.apply(vm.filteredMovies, filter(movies));
                vm.scrollEnabled = true;
            }
            vm.loading = false;
        }

        function nextPage() {
            vm.page = vm.page + 1;
        }

        function filter(movies) {
            console.log(movies);
            var filtered = movies.filter(function(movie) {
                return !vm.genre || movie.genres.indexOf(vm.genre) !== -1;
            });
            console.log(filtered);

            return filtered;
        }
    }
})();
