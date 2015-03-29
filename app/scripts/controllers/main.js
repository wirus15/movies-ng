(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'Trakt'];

  function MainController($scope, trakt) {
    $scope.hello = 'world';
    $scope.popular = [];

    trakt.getPopularMovies().then(function (response) {
      console.log(response);
    });
  }
})();
