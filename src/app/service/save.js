angular
    .module('app')
    .service('Save', function () {
      var Save = this;
      Save.save = function (toBeSaved) {
        var toBeStored = JSON.stringify(toBeSaved);
        // var idStored = JSON.stringify(toBeSaved.id);
        localStorage.setItem('saved', toBeStored);
      };
      Save.load = function () {
        var unString = localStorage.getItem('saved');
        if (unString) {
          return JSON.parse(unString);
        }
        return [];
      };
    });
