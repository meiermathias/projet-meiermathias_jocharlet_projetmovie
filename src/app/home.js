angular
  .module('app')
  .component('home', {
      // localStorage.removeItem('saved');
    templateUrl: 'app/home.html',
    controller: function (Save, load) {
      // Bonne pratique redefinir : var $ctrl = this
      var $ctrl = this;

      $ctrl.maVariable = 'Hello';

      $ctrl.ajouterAListe = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        Save.save($ctrl.maListe);
        // $ctrl.sauvegarder($ctrl.maListe);
      };

      $ctrl.suprimmerAListe = function ($index) {
        $ctrl.maListe.splice($index, 1);
      };

      $ctrl.suprimmerAListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
      };

      $ctrl.maListe = load.load();
    }

  });
