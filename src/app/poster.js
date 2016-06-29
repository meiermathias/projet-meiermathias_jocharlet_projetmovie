
angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/poster.html',
    controller: function posterControler() {
    },
    bindings: {
      movie: '<'
    }
  });
