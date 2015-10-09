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
            console.log(scope.movie);
            var tmdb = scope.movie.ids.tmdb;
            var watchlist = WatchlistResource.get(function(list) {
                list.forEach(function(item) {
                    if (item.ids.tmdb === tmdb) {
                        scope.isOnList = true;
                    }
                });
            });
        }
    }
})();
