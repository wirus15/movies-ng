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

    $scope.changeCategory = changeCategory;
    $scope.nextPage = nextPage;

    $scope.$watchGroup(['category', 'page'], getMovies);

    function getMovies() {
      var limit = 48;
      switch ($scope.category) {
        case 'trending':
          movieRepository
            .getTrendingMovies($scope.page, limit)
            .then(function (response) {
              appendMovies(_.map(response.data, function(item) {
                return item.movie;
              }));
            });
        case 'popular':
          movieRepository
            .getPopularMovies($scope.page, limit)
            .then(function (response) {
              appendMovies(response.data);
            });
      }
    }

    function appendMovies(movies) {
      $scope.movies.push.apply($scope.movies, movies);
    }

    function nextPage() {
      $scope.page = $scope.page + 1;
    }

    function changeCategory(category) {
      $scope.movies = [];
      $scope.category = category;
      $scope.page = 1;
    }
  }
})();
