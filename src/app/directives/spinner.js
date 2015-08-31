(function () {
    'use strict';

    angular
        .module('app')
        .directive('spinner', spinner);

    function spinner() {
        return {
            restrict: 'E',
            template: '<div class="mov-spinner"><i class="fa fa-spinner fa-spin fa-2x"></i></div>',
            link: function ($scope, element, attrs) {
                $scope.spinner = {
                    show: show,
                    hide: hide
                };
            }
        };
    }

    function show() {
        jQuery('.mov-spinner').stop(true, false).fadeIn();
        jQuery('body').css({overflow: 'hidden'});
    }

    function hide() {
        jQuery('.mov-spinner').stop(true, false).fadeOut();
        jQuery('body').css({overflow: 'auto'});
    }

})();
