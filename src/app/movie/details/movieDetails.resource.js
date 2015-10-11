(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieDetailsResource', MovieDetailsResource);

    function MovieDetailsResource(Trakt, MovieStatusInterceptor) {

        var defaults = {
            extended: 'full,images'
        };

        return Trakt('/movies/:slug', defaults, {
            get: {
                cache: true,
                interceptor: MovieStatusInterceptor
            }
        });
    }
})();
