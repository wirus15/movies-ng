(function() {
    'use strict';

    angular
        .module('app')
        .factory('Trakt', Trakt);

    function Trakt($resource, config) {

        return function(url, paramDefaults, actions, options) {
            actions = appendHeaders(actions);
            url = prependBaseUrl(url);

            return $resource(url, paramDefaults, actions, options);
        };

        function prependBaseUrl(url) {
            return config.trakt.apiBaseUrl + url;
        }

        function appendHeaders(actions) {
            var headers = {
                'Content-Type': 'application/json',
                'trakt-api-key': config.trakt.clientId,
                'trakt-api-version': config.trakt.apiVersion
            };

            angular.forEach(actions, function(action) {
                action.headers = angular.extend({}, action.headers, headers);
            });

            return actions;
        }
    }

})();