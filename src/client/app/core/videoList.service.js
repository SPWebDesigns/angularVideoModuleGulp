(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('videoList', videoList);

  videoList.$inject = ['$http', '$q'];
  /* @ngInject */
  function videoList($http, $q) {
    var videoData=null;
    var playerVideoPlayList=null;
    var player1=[];
    var player2=[];
    
    var service = {
      getvideoList: getvideoList,
      getvideoPlayList: getvideoPlayList,
      initVideosBad: initVideosBad,
      initVideosGood: initVideosGood,
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

    /* getvideoPlayList Not Implemented*/
    function getvideoPlayList() {

      var videoPlayListData=[{
          sources: [{
            src: 'http://bad-videos.dev.zype.com/video1/zfaeEvbmOKYqguNR.m3u8',
            type: 'application/x-mpegURL'
          }],
          poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdOft4Vpuk_KLL0VhDPIsTlvbqJZE7UwtwX0aYZ2Kvj_SCdt_Z'
        }, {
          sources: [{
            src: 'http://bad-videos.dev.zype.com/video4/U477ESYmVc5XQTTK.m3u8',
            type: 'application/x-mpegURL'
          }],
          poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdOft4Vpuk_KLL0VhDPIsTlvbqJZE7UwtwX0aYZ2Kvj_SCdt_Z'
        }, {
          sources: [{
            src: 'http://bad-videos.dev.zype.com/video3/_at63NQWIh9IIx7m.m3u8',
            type: 'application/x-mpegURL'
          }],
          poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdOft4Vpuk_KLL0VhDPIsTlvbqJZE7UwtwX0aYZ2Kvj_SCdt_Z'
        }, {
          sources: [{
            src: 'http://bad-videos.dev.zype.com/good-video1/ArduinoTheDocumentary.mp4',
            type: 'video/mp4'
          }],
          poster: 'http://d2ydh70d4b5xgv.cloudfront.net/images/4/7/star-wars-solid-movie-logo-sign-emblem-unique-metal-item-custom-made-art-piece-6246301ed0badfc8eacf80c2700043bc.jpg'
        }, {
          sources: [{
            src: 'http://bad-videos.dev.zype.com/good-video2/sintel-2048-stereo.mp4',
            type: 'video/mp4'
          }],
          poster: 'http://d2ydh70d4b5xgv.cloudfront.net/images/4/7/star-wars-solid-movie-logo-sign-emblem-unique-metal-item-custom-made-art-piece-6246301ed0badfc8eacf80c2700043bc.jpg'
        }, {
          sources: [{
            src: 'http://bad-videos.dev.zype.com/good-video3/bipbopall.m3u8',
            type: 'application/x-mpegURL'
          }],
          poster: 'http://d2ydh70d4b5xgv.cloudfront.net/images/4/7/star-wars-solid-movie-logo-sign-emblem-unique-metal-item-custom-made-art-piece-6246301ed0badfc8eacf80c2700043bc.jpg'
      }];
      //playerVideoPlayList = videojs('videoPlayList');
      if(playerVideoPlayList){
        //playerVideoPlayList.dispose();
        playerVideoPlayList.playlist(videoPlayListData);

        playerVideoPlayList.playlist.autoadvance(0);
      }
      videojs('videoPlayList').ready(function(){
        console.log('videoPlayList');
        playerVideoPlayList = this;
        console.log('playerVideoPlayList');
        console.log(playerVideoPlayList);
      }); 
    }

  }
})();
