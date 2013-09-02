angular.module('fireace', ['firebase', 'ui.ace']).directive('fireace',function(angularFire) {
   return {
      restrict: 'AE',
      template: '<div ui-ace ng-model="fireace.message"></div>',
      link: function link(scope, elem, attrs) {
         var ref = new Firebase(attrs.firebaseurl);
         scope.fireace = {};
         angularFire(ref.limit(15), scope, 'fireace'); 
      }
   }
});

