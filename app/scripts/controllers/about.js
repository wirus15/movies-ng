'use strict';

/**
 * @ngdoc function
 * @name moviesNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviesNgApp
 */
angular.module('moviesNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
