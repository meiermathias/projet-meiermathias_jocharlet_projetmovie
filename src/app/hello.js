angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (){
        //Bonne pratique redefinir : var $ctrl = this
      var $ctrl = this;
      $ctrl.maVariable = "Hello";

      $ctrl.capitalize = function(text){
          return text[0].toUpperCase() + text.slice(1).toLowerCase();       
      }
    }
  });
