(function() {
    'use strict';

    angular
        .module('app')
        .factory('GenresResource', GenresResource);

    function GenresResource(Trakt) {
        return Trakt('/genres/movies', null, {
            get: {
                cache: true,
                isArray: true
            }
        });
    }
})();
