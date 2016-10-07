(function() {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['logger', '$timeout','videoList' ];
  /* @ngInject */
  function AdminController(logger, $timeout, videoList ) {
    var vm = this;
    vm.title = 'Video Playlist';
    //$timeout(videoList.getvideoPlayList, 0);

    
  }
})();
