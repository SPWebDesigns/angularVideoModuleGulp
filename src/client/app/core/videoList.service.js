(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('videoList', videoList);

  videoList.$inject = ['$http', '$q'];
  /* @ngInject */
  function videoList($http, $q) {
    var service = {
      getvideoList: getvideoList
    };

    return service;

    function getvideoList() {
      return $http.get('./playlist/videoList.json')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed to get the videoList')(e);
      }
    }
  }
})();
