angular
  .module('app')
  .component('favorit', {
    templateUrl: 'app/favorit.html',
    controller: function favoritController(Save, load, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/upcoming?language=fr')
      .then(function (result) {
        $ctrl.movies = result.data.results;
      });
      $ctrl.maListe = load.load();

      $ctrl.suprimmerAListe = function ($index) {
        $ctrl.maListe.splice($index, 1);
      };

      $ctrl.suprimmerAListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
      };
    }
  });
