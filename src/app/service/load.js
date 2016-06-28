  function load() {
    var load = this;
    load.load = function () {
      var unString = localStorage.getItem('saved');
      if (unString) {
        return JSON.parse(unString);
      }
      return [];
    };
  }

  angular
    .module('app')
    .service('load', load);
