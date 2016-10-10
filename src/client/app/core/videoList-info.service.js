(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('videoListInfo', videoListInfo);

  videoListInfo.$inject = ['$http', '$q'];
  /* @ngInject */
  function videoListInfo($http, $q) {
    var service = {
      getOriginalVideos: getOriginalVideos,
      getSmallVideos: getSmallVideos
    };
    
    return service;

    function getOriginalVideos(){
      var videoPlayListDataOriginals=[{
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
      return videoPlayListDataOriginals;
    }


    function getSmallVideos(){
      var videoPlayListDataSmalls=[{
        sources: [{
          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
      }, {
        sources: [{
          src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      }, {
        sources: [{
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://www.videojs.com/img/poster.jpg'
      }, {
        sources: [{
          src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      }, {
        sources: [{
          src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
          type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/video/poster.png'
      }];
      return videoPlayListDataSmalls;
    }
  }
})();
