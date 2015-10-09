(function() {
    'use strict';

    angular
        .module('app')
        .factory('WatchlistResource', WatchlistResource);

    function WatchlistResource(Trakt) {

        return Trakt('', null, {
            get: {
                url: '/sync/watchlist/movies',
                cache: true,
                isArray: true,
                transformResponse: transformResponse
            },
            add: {
                url: '/sync/watchlist',
                method: 'post'
            },
            remove: {
                url: '/sync/watchlist/remove',
                method: 'post'
            }
        });

        function transformResponse(data) {
            var items = angular.fromJson(data);

            return _.map(items, function (item) {
                return item.movie;
            });
        }
    }
})();
