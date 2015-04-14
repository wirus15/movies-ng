(function () {
  'use strict';

  angular
    .module('app')
    .directive('navMenu', navMenu);

  function navMenu($location) {

    return {
      restrict: 'A',
      scope: false,
      link: link
    };

    function link(scope, element) {
      setActive();
      scope.$on('$locationChangeSuccess', setActive);

      function setActive() {
        var path = $location.path();
        if (path) {
          angular.forEach(element.find('li'), function (li) {
            var anchor = li.querySelector('a');
            if (anchor.href.match('#' + path + '(?=\\?|$)')) {
              angular.element(li).addClass('active');
            } else {
              angular.element(li).removeClass('active');
            }
          });
        }
      }
    }
  }
})();
