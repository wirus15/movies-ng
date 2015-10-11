(function () {
    'use strict';

    angular
        .module('app')
        .controller('CastController', CastController);

    function CastController($scope, $stateParams, PeopleResource) {
        var vm = this;
        vm.cast = [];
        initialize();

        function initialize() {
            PeopleResource.get({slug: $stateParams.slug}, function(people) {
                vm.cast = people.cast;
            });
        }
    }
})();
