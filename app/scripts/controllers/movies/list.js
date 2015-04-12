(function () {
  'use strict';

  angular
    .module('app')
    .controller('moviesListController', moviesListController);

  moviesListController.$inject = ['$scope', '$state', 'movieRepository'];

  function moviesListController($scope, $state, movieRepository) {
    $scope.movies = $scope.movies || [];
    $scope.category = $state.params.category;
    $scope.page = parseInt($state.params.page) || 1;
    $scope.categories = [
      { name: 'trending', label: 'Trending' },
      { name: 'popular', label: 'Popular' }
    ];
    $scope.nextPage = nextPage;
    $scope.busy = false;

    $scope.$watchGroup(['category', 'page'], getMovies);

    function getMovies() {
      var limit = 48;
      $scope.busy = true;
      switch ($scope.category) {
        case 'trending':
          movieRepository
            .getTrendingMovies($scope.page, limit)
            .then(function (response) {
              appendMovies(_.map(response.data, function(item) {
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
      $scope.busy = false;
    }

    function nextPage() {
      $scope.page = $scope.page + 1;
    }
  }
})();
