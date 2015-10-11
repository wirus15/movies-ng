(function() {
    'use strict';

    angular
        .module('app')
        .directive('watchedButton', WatchedButtonDirective);

    function WatchedButtonDirective(WatchedResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/movie/details/buttons/watchedButton.directive.html',
            scope: {
                movie: '='
            },
            link: link
        };

        function link(scope) {
            scope.isOnList = false;
            scope.toggle = toggle;
            scope.$watch('movie.watched', function(value) {
                scope.isOnList = value;
            });

            function toggle() {
                if (scope.movie.watched) {
                    scope.movie.removeFromWatched();
                } else {
                    scope.movie.addToWatched();
                }
            }
        }
    }
})();
