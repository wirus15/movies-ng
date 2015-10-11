(function() {
    'use strict';

    angular
        .module('app')
        .directive('watchlistButton', WatchlistButtonDirective);

    function WatchlistButtonDirective(WatchlistResource) {
        return {
            restrict: 'E',
            templateUrl: 'app/movie/details/buttons/watchlistButton.directive.html',
            scope: {
                movie: '='
            },
            link: link
        };

        function link(scope) {
            scope.isOnList = false;
            scope.toggle = toggle;
            scope.$watch('movie.watchlist', function (value) {
                scope.isOnList = value;
            });

            function toggle() {
                if (scope.movie.watchlist) {
                    scope.movie.removeFromWatchlist();
                } else {
                    scope.movie.addToWatchlist();
                }
            }
        }
    }
})();
