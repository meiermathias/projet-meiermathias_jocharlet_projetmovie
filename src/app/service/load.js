  angular
    .module('app')
    .service('load', function () {
      var load = this;
      load.load = function () {
        var unString = localStorage.getItem('saved');
        if (unString) {
          return JSON.parse(unString);
        }
        return [];
      };
    });
