function movieController($stateParams) {
  var $ctrl = this;
  $ctrl.text = 'movie : ' + $stateParams.movieId;
}

angular
  .module('app')
  .component('movie', {
    templateUrl: 'app/movie.html',
    controller: movieController
  });
