function Save() {
  var Save = this;
  Save.save = function (toBeSaved) {
    var toBeStored = JSON.stringify(toBeSaved);
    localStorage.setItem('saved', toBeStored);
  };
  Save.load = function () {
    var unString = localStorage.getItem('saved');
    if (unString) {
      return JSON.parse(unString);
    }
    return [];
  };
}

angular
    .module('app')
    .service('Save', Save);
