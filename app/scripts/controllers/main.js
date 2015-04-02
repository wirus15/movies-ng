(function () {
  'use strict';

  angular
    .module('app')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'movieRepository'];

  function mainController($scope, movieRepository) {
    $scope.hello = 'world';
    $scope.popular = [];

    movieRepository.getPopularMovies().then(function (response) {
      console.log(response.data);
    });
  }
})();
