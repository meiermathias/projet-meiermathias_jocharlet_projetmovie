describe('Load service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Load) {
    expect(Load.getData()).toEqual(3);
  }));
});
