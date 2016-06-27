angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: function (Save) {
      // Bonne pratique redefinir : var $ctrl = this
      var $ctrl = this;

      $ctrl.maVariable = 'Hello';
    // localStorage.removeItem('saved');
      $ctrl.recuperer = function () {
        var unString = localStorage.getItem('saved');
        if (unString) {
          return JSON.parse(unString);
        }
        return [];
      };

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
/*
      $ctrl.sauvegarder = function (aSauver) {
        var toBeStored = JSON.stringify(aSauver);
        localStorage.setItem('saved', toBeStored);
      };
*/
      $ctrl.maListe = $ctrl.recuperer();

      // $ctrl.maListe = Save.load();
    }
  });

// indexOf():
// splice(index,1);
// json.stringify({hello:{text:"world"}});
// json.parse(texte);
/*       if (retourVal.length>0){
            for (i = 0; i < retourVal.length; i++) {
                $ctrl.maListe.push(retourVal[i]);
            }

        }

        else {
          $ctrl.maListe = [];
        }
*/
