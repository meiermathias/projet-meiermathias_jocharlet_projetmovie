function favoritController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('favorit', {
    templateUrl: 'app/favorit.html',
    controller: favoritController
  });

