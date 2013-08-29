'use strict';

describe('Service: ace', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var ace;
  beforeEach(inject(function (_ace_) {
    ace = _ace_;
  }));

  it('should do something', function () {
    expect(!!ace).toBe(true);
  });

});
