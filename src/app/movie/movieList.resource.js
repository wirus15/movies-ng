(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieListResource', MovieListResource);

    function MovieListResource(Trakt) {

        var defaults = {
            page: 1,
            limit: 48,
            extended: 'image'
        };

        return Trakt('', defaults, {
            trending: {
                url: '/movies/trending',
                cache: true,
                isArray: true,
                transformResponse: trendingTransformResponse
            },
            popular: {
                url: '/movies/popular',
                cache: true,
                isArray: true
            }
        });

        function trendingTransformResponse(data) {
            var items = angular.fromJson(data);

            return _.map(items, function (item) {
                return item.movie;
            });
        }
    }
})();
