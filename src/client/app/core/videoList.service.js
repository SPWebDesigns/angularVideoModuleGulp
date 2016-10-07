(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('videoList', videoList);

  videoList.$inject = ['$http', '$q'];
  /* @ngInject */
  function videoList($http, $q) {
    var videoData=null;
    var player1=[];
    var player2=[];
    var service = {
      getvideoList: getvideoList,
      initVideosBad: initVideosBad,
      initVideosGood: initVideosGood
    };

    return service;

    function getvideoList() {
      var defer=$q.defer();
      if(videoData){
        defer.resolve(videoData);
      }
      else{
        $http.get('./playlist/videoList.json')
        .then(success)
        .catch(fail);
      }
      
      function success(response) {
        videoData=response.data;
        defer.resolve(videoData);
      }

      function fail(e) {
        return exception.catcher('XHR Failed to get the videoList')(e);
      }
      return defer.promise;
    }

    function initVideosBad(){
        var data= videoData;
        for(var i=0; i< player1.length;i++){
              player1[i].dispose();
              player1.splice(i,1);
              i--;
        }
        for(var i=0; i<= data.bads.length;i++){
            videojs(data.bads[i].id).ready(function(){
                player1.push(this);
          });
        }
    }

    function initVideosGood(){
      var data= videoData;
      for(var i=0; i< player2.length;i++){
              player2[i].dispose();
              player2.splice(i,1);
              i--;
        }
        for(var i=0; i<= data.goods.length;i++){
            videojs(data.goods[i].id).ready(function(){
              player2.push(this);
          });
        }
    }



  }
})();
