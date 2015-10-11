(function() {
    'use strict';

    angular
        .module('app')
        .factory('PeopleResource', PeopleResource);

    function PeopleResource(Trakt) {

        return Trakt('/movies/:slug/people', null, {
            get: {
                cache: true
            }
        });
    }
})();
