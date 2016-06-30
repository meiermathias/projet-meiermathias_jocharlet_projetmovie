angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      template: '<app></app>'
    })
    .state('app.home', {
      url: '/',
      template: '<home></home>'
    })
    .state('app.favorit', {
      url: '/favorit',
      template: '<favorit></favorit>'
    })
    .state('app.movie', {
      url: '/movie/:movieId', // fragment url stocké dans movieId
      template: '<movie></movie>'
    });
}
