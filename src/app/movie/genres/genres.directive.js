(function() {
    'use strict';

    angular
        .module('app')
        .directive('genres', GenresDirective);

    function GenresDirective(GenresResource) {
        return {
            restrict: 'AE',
            templateUrl: 'app/movie/genres/genres.directive.html',
            scope: {
                currentGenre: '=genre'
            },
            link: link
        };

        function link(scope) {
            scope.genres = GenresResource.get();
            scope.selectGenre = function (genre) {
                scope.currentGenre = genre;
            }
        }
    }
})();
