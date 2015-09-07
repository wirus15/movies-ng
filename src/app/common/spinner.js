(function () {
    'use strict';

    angular
        .module('app')
        .directive('spinner', Spinner);

    function Spinner() {
        return {
            restrict: 'E',
            template: '<div class="spinner" ng-style="{\'font-size\': (size || 10)+\'px\'}" ng-if="on"></div>',
            scope: {
                on: '=',
                size: '@?'
            }
        };
    }
})();
