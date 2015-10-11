(function () {
    'use strict';

    angular
        .module('app')
        .controller('CommentsController', CommentsController);

    function CommentsController($scope, $stateParams, CommentsResource) {

        var vm = this;
        vm.page = 1;
        vm.comments = [];
        initialize();

        function initialize() {
            $scope.$watch('commentsCtrl.page', loadComments);
        }

        function loadComments() {
            var params = {
                slug: $stateParams.slug,
                page: vm.page
            };
            vm.comments = CommentsResource.get(params);
        }
    }
})();
