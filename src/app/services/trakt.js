(function() {
    'use strict';

    angular
        .module('app')
        .factory('Trakt', Trakt);

    function Trakt($resource, config, Token) {

        return function(url, paramDefaults, actions, options) {
            url = prependBaseUrl(url);
            actions = appendHeaders(actions);
            actions = prependBaseUrlForActions(actions);

            return $resource(url, paramDefaults, actions, options);
        };

        function prependBaseUrl(url) {
            return config.trakt.apiBaseUrl + url;
        }

        function prependBaseUrlForActions(actions) {
            angular.forEach(actions, function(action) {
                if (action.url !== undefined) {
                    action.url = prependBaseUrl(action.url);
                }
            });

            return actions;
        }

        function appendHeaders(actions) {
            var headers = {
                'Content-Type': 'application/json',
                'trakt-api-key': config.trakt.clientId,
                'trakt-api-version': config.trakt.apiVersion
            };

            if (Token.isValid()) {
                headers.Authorization = 'Bearer ' + Token.get();
            }

            angular.forEach(actions, function(action) {
                action.headers = angular.extend({}, action.headers, headers);
            });

            return actions;
        }
    }

})();