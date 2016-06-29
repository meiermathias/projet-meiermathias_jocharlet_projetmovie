describe('favorit component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('favorit', function () {
      return {
        templateUrl: 'app/favorit.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<favorit></favorit>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
