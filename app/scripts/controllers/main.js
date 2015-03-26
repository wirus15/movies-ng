'use strict';

/**
 * @ngdoc function
 * @name moviesNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesNgApp
 */
angular.module('moviesNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
