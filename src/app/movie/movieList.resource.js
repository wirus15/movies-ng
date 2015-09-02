(function () {
    'use strict';

    angular
        .module('app')
        .factory('MovieListResource', MovieListResource);

    function MovieListResource($resource) {
        return $resource{

        }


        $scope.movies = $scope.movies || [];
        $scope.category = $state.params.category;
        $scope.page = parseInt($state.params.page) || 1;
        $scope.nextPage = nextPage;
        $scope.scrollEnabled = true;

        $scope.$watchGroup(['category', 'page'], getMovies);

        function getMovies() {
            var limit = 48;
            $scope.scrollEnabled = false;
            switch ($scope.category) {
                case 'trending':
                    movieRepository
                        .getTrendingMovies($scope.page, limit)
                        .then(function (response) {
                            appendMovies(_.map(response.data, function (item) {
                                return item.movie;
                            }));
                        });
                    break;
                case 'popular':
                    movieRepository
                        .getPopularMovies($scope.page, limit)
                        .then(function (response) {
                            appendMovies(response.data);
                        });
                    break;
            }
        }

        function appendMovies(movies) {
            $scope.movies.push.apply($scope.movies, movies);
            $scope.scrollEnabled = true;
        }

        function nextPage() {
            $scope.page = $scope.page + 1;
        }
    }
})();
