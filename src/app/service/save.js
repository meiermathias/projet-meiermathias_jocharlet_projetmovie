angular
    .module('app')
    .service('Save', function () {
      var Save = this;
      Save.save = function (toBeSaved) {
      // ...
        console.log('TODO: save', toBeSaved);
      };
    });
