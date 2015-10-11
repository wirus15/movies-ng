(function() {
    'use strict';

    angular
        .module('app')
        .factory('WatchedResource', WatchedResource);

    function WatchedResource(Trakt) {

        return Trakt('', null, {
            get: {
                url: '/sync/watched/movies',
                cache: true,
                isArray: true,
                transformResponse: transformResponse
            },
            add: {
                url: '/sync/history',
                method: 'post'
            },
            remove: {
                url: '/sync/history/remove',
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
