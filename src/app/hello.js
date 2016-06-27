angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function() {
      //Bonne pratique redefinir : var $ctrl = this
      var $ctrl = this;
      $ctrl.maListe = ["District 9", "Matrix"];
      $ctrl.maVariable = "Hello";

      $ctrl.ajouterAListe = function() {
        $ctrl.maListe.push($ctrl.maVariable);
      };

  /*    $ctrl.suprimmerAListe = function($index) {
        $ctrl.maListe.splice($index,1);
      };
*/
$ctrl.suprimmerAListe = function(el) {
     $ctrl.maListe.splice($ctrl.maListe.indexOf(el),1);
   };

    }
  });


// indexOf():
//splice(index,1);
