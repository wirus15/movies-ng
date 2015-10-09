(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieListResource', MovieListResource);

    function MovieListResource(Trakt) {

        var defaults = {
            page: 1,
            limit: 48,
            extended: 'full,images'
        };

        return Trakt('', defaults, {
            trending: {
                url: '/movies/trending',
                cache: true,
                isArray: true,
                transformResponse: transformResponse
            },
            popular: {
                url: '/movies/popular',
                cache: true,
                isArray: true
            },
            anticipated: {
                url: '/movies/anticipated',
                cache: true,
                isArray: true,
                transformResponse: transformResponse
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
