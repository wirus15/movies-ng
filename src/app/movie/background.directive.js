(function() {
    'use strict';

    angular
        .module('app')
        .directive('background', BackgroundDirective);

    function BackgroundDirective() {
        return {
            restrict: 'A',
            scope: {
                background: '='
            },
            link: link
        };

        function link(scope, element) {
            scope.$watch('background', function(background) {
                element.css({
                    'background-image': 'url(' + background +')'
                });
            });
        }
    }
})();