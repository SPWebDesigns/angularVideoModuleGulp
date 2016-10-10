(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('videoList', videoList);

  videoList.$inject = ['$http', '$q', 'videoListInfo'];
  /* @ngInject */
  function videoList($http, $q, videoListInfo) {
    var videoData=null;
    var playerVideoPlayListSmall, playerVideoPlayListOriginals;
    var player1=[];
    var player2=[];
    var originals = videoListInfo.getOriginalVideos();
    var small = videoListInfo.getSmallVideos();
    var service = {
      getvideoList: getvideoList,
      initVideosBad: initVideosBad,
      initVideosGood: initVideosGood,
      getvideoPlayListOriginal: getvideoPlayListOriginal,
      getvideoPlayListSmallSize: getvideoPlayListSmallSize,
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
        for(var i=0; i< data.bads.length;i++){
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
        for(var i=0; i< data.goods.length;i++){
            videojs(data.goods[i].id).ready(function(){
              player2.push(this);
          });
        }
    }

    function getvideoPlayListOriginal() {
      if(playerVideoPlayListOriginals){
          playerVideoPlayListOriginals.dispose();
      }
      videojs('videoOriginals').ready(function(){
        playerVideoPlayListOriginals = this;
        playerVideoPlayListOriginals.playlist(originals);
        playerVideoPlayListOriginals.playlist.autoadvance(0);
      }); 
    }

    function getvideoPlayListSmallSize() {
      if(playerVideoPlayListSmall){
          playerVideoPlayListSmall.dispose();
      }
      videojs('videoSmallVideos').ready(function(){
        playerVideoPlayListSmall = this;
        playerVideoPlayListSmall.playlist(small);
        playerVideoPlayListSmall.playlist.autoadvance(0);
      }); 
    }
  }
})();
