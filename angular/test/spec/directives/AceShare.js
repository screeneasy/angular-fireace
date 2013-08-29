'use strict';

describe('Directive: AceShare', function () {
  beforeEach(module('angularApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<-ace-share></-ace-share>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the AceShare directive');
  }));
});
