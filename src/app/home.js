angular
  .module('app')
  .component('home', {
      // localStorage.removeItem('saved');
    templateUrl: 'app/home.html',
    controller: function (Save, load, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/upcoming?language=fr')
      .then(function (result) {
        $ctrl.movies = result.data.results;
      });

      $ctrl.maVariable = 'Hello';
      $ctrl.maListe = load.load();

      $ctrl.ajouterAListe = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        Save.save($ctrl.maListe);
      };

      $ctrl.suprimmerAListe = function ($index) {
        $ctrl.maListe.splice($index, 1);
      };

      $ctrl.suprimmerAListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
      };
    }
  });
