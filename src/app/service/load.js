function Load() {
}

Load.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Load', Load);

