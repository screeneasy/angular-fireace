'use strict';

angular.module('angularApp')
  .directive('aceshare', function (ace, socket) {
    return {
      template: '<div class="aceable"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        ace.edit(element);
        element.text('this is the AceShare directive');
      }
    };
  });
