angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (){
        //Bonne pratique redefinir : var $ctrl = this
      var $ctrl = this;
      $ctrl.maVariable = "Hello";
    }
  });
