angular
    .module('app')
    .service('Save', function () {
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

      Save.remove = function (toBeRemoved) {
        Save.liste = Save.load();
        for (var i = 0; i < Save.liste.length; i++) {
          if (Save.liste[i].id === toBeRemoved.id) {
            Save.liste.splice(i, 1);
          }
        }
        Save.save(Save.liste);
      };
    });
