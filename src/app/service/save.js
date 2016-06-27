angular
    .module('app')
    .service('Save', function () {
      var Save = this;
      Save.save = function (toBeSaved) {
        var toBeStored = JSON.stringify(toBeSaved);
        localStorage.setItem('saved', toBeStored);
      };
    });
