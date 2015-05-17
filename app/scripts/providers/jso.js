(function () {
    'use strict';

    angular
        .module('app')
        .provider('jsoProvider', jsoProvider);

    function jsoProvider() {
        var $this = this;
        $this.config = {};

        $this.configure = function(config) {
            angular.extend($this.config, config);
        }

        $this.$get = function() {
            return new JSO($this.config);
        }
    }
})();
