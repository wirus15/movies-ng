(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieDetailsController', MovieDetailsController);

    function MovieDetailsController($scope, $stateParams, MovieDetailsResource) {
        var vm = this;
        vm.movie = MovieDetailsResource.get({ slug: $stateParams.slug });
        console.log(vm.movie);
    }
})();
