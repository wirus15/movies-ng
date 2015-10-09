(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieDetailsResource', MovieDetailsResource);

    function MovieDetailsResource(Trakt) {

        var defaults = {
            page: 1,
            limit: 48,
            extended: 'full,images'
        };

        return Trakt('/movies/:slug', defaults, {
            get: {
                cache: true
            }
        });
    }
})();
