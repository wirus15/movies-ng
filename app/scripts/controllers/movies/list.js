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
    $scope.prevPage = prevPage;
    $scope.nextPage = nextPage;

    $scope.$watchGroup(['category', 'page'], getMovies);
    $scope.$watchGroup(['category', 'page'], updateState);

    function getMovies() {
      $scope.spinner.show();
      switch ($scope.category) {
        case 'trending':
          return movieRepository.getTrendingMovies($scope.page).then(function (response) {
            $scope.movies = _.map(response.data, function(item) {
              return item.movie;
            });
            $scope.spinner.hide();
          });
        case 'popular':
          return movieRepository.getPopularMovies($scope.page).then(function (response) {
            $scope.movies = response.data;
            $scope.spinner.hide();
          });
      }
    }

    function updateState() {
      $state.transitionTo($state.$current, {
        category: $scope.category,
        page: $scope.page
      }, {
        notify: false
      });
    }

    function changeCategory(category) {
      $scope.category = category;
      $scope.page = 1;
    }

    function prevPage() {
      if ($scope.page > 1) {
        $scope.page = $scope.page - 1;
      }
    }

    function nextPage() {
      $scope.page = $scope.page + 1;
    }
  }
})();
