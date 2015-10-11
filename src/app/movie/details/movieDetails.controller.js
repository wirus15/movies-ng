(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieDetailsController', MovieDetailsController);

    function MovieDetailsController($scope, movie) {
        var vm = this;
        vm.movie = movie;
        console.log(movie);
    }
})();
