(function() {
    'use strict';

    angular
        .module('app')
        .factory('CommentsResource', CommentsResource);

    function CommentsResource(Trakt) {

        var defaults = {
            page: 1,
            limit: 25
        };

        return Trakt('/movies/:slug/comments', defaults, {
            get: {
                cache: true,
                isArray: true
            }
        });
    }
})();
