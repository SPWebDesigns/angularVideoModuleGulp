(function() {
  'use strict';

  angular
    .module('app.video-playlist')
    .controller('VideoPlayListController', VideoPlayListController);

  VideoPlayListController.$inject = ['logger', '$timeout','videoList' ];
  /* @ngInject */
  function VideoPlayListController(logger, $timeout, videoList ) {
    var vm = this;
    vm.title = 'Video Playlist';
    $timeout(videoList.getvideoPlayListOriginal, 0);
    $timeout(videoList.getvideoPlayListSmallSize, 0);
  }
})();
