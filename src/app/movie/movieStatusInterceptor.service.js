(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieStatusInterceptor', MovieStatusInterceptor);

    function MovieStatusInterceptor(WatchlistResource, WatchedResource) {
        return {
            response: function (response) {
                var movie = response.data;

                checkWatchlist(movie);
                checkWatched(movie);
                movie.addToWatchlist = addToWatchlist;
                movie.addToWatched = addToWatched;
                movie.removeFromWatchlist = removeFromWatchlist;
                movie.removeFromWatched = removeFromWatched;

                return movie;
            }
        };

        function checkWatchlist(movie) {
            var trakdId = movie.ids.trakt;
            WatchlistResource.get(function(list) {
                var compareId = function(item) {
                    return item.ids.trakt === trakdId;
                };
                movie.watchlist = !!_.find(list, compareId);
            });
        }

        function checkWatched(movie) {
            var traktId = movie.ids.trakt;
            WatchedResource.get(function(list) {
                var compareId = function(item) {
                    return item.ids.trakt === traktId;
                };
                movie.watched = !!_.find(list, compareId);
            });
        }

        function addToWatchlist() {
            var movie = this;
            movie.watchlist = true;
            WatchlistResource.add({
                movies: [movie]
            });
        }

        function removeFromWatchlist() {
            var movie = this;
            movie.watchlist = false;
            WatchlistResource.remove({
                movies: [movie]
            });
        }

        function addToWatched() {
            var movie = this;
            movie.watched = true;
            WatchedResource.add({
                movies: [movie]
            });
        }

        function removeFromWatched() {
            var movie = this;
            movie.watched = false;
            WatchedResource.remove({
                movies: [movie]
            });
        }
    }
})();