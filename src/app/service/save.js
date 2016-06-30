angular
    .module('app')
    .service('Save', function () {
      var Save = this;
      Save.save = function (toBeSaved) {
        var toBeStored = JSON.stringify(toBeSaved);
        localStorage.setItem(toBeSaved.id, toBeStored);
      };
      Save.load = function () {
        var unString = localStorage.getItem('saved');
        if (unString) {
          return JSON.parse(unString);
        }
        return [];
      };
    });
