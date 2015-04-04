(function () {
  'use strict';

  angular
    .module('app')
    .controller('moviesListController', moviesListController);

  moviesListController.$inject = ['$scope', '$routeParams', 'movieRepository'];

  function moviesListController($scope, $routeParams, movieRepository) {
    $scope.movies = $scope.movies || [];
    $scope.category = $routeParams.category;
    $scope.page = parseInt($routeParams.page) || 1;
    $scope.categories = [
      { name: 'trending', label: 'Trending' },
      { name: 'popular', label: 'Popular' }
    ];

    $scope.$watchGroup(['category', 'page'], getMovies);

    function getMovies() {
      switch ($scope.category) {
        case 'trending':
          return movieRepository.getTrendingMovies($scope.page).then(function (response) {
            $scope.movies = _.map(response.data, function(item) {
              return item.movie;
            });
          });
        case 'popular':
          return movieRepository.getPopularMovies($scope.page).then(function (response) {
            $scope.movies = response.data;
          });
      }
    }
  }
})();
