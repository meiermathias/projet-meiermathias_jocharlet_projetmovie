angular
    .module('app')
    .service('data', function (Save) {
      var data = this;
      data.liste = Save.load();

      data.toggle = function (item) {
        if (data.hasMovie(item)) {
          Save.remove(item);
        } else {
          data.liste.push(item);
          Save.save(data.liste);
        }
      };

      data.hasMovie = function (movie) {
        for (var i = 0; i < data.liste.length; i++) {
          if (data.liste[i].id === movie.id) {
            return true;
          }
        }
        return false;
      };
    });
