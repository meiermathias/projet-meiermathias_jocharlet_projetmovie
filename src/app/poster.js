
angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/poster.html',
    controller: function (Save, load, data) {
      var $ctrl = this;
      $ctrl.mInput = 'test';
      $ctrl.maListe = load.load();

      $ctrl.ajouterAListe = function ($id, $title, $overview, $poster) {
        var newItem = {id: $id, title: $title, overview: $overview, poster: $poster};
          data.toggle(newItem);
      };

      $ctrl.suprimmerAListe = function ($index) {
        $ctrl.maListe.splice($index, 1);
      };

      $ctrl.suprimmerAListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
      };
    },
    bindings: {
      movie: '<'
    }
  });
