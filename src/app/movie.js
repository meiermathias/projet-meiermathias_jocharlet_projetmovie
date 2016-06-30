function movieController($stateParams, $http) {
  var $ctrl = this;
  $ctrl.text = $stateParams.movieId;
  $http.get('https://amc.ig.he-arc.ch/tmdb/movie/' + $stateParams.movieId + '?language=fr')
  .then(function (result) {
    $ctrl.movie = result.data;
  });
  $http.get('https://amc.ig.he-arc.ch/tmdb/movie/' + $stateParams.movieId + '/release_dates')
  .then(function (result) {
    $ctrl.movieReleaseDate = result.data;
  });
}

angular
  .module('app')
  .component('movie', {
    templateUrl: 'app/movie.html',
    controller: movieController
  });
