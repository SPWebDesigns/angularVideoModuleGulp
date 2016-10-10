(function() {
  'use strict';

  angular
    .module('app.video-list')
    .controller('VideoListController', VideoListController);

  VideoListController.$inject = ['$q', 'logger', 'videoList', '$sce', '$state', '$timeout'];
  /* @ngInject */
  function VideoListController($q, logger, videoList,  $sce, $state, $timeout) {
    var vm = this;
    vm.trustSrc = trustSrc;

	videoList.getvideoList().then(function(data) {
	  vm.data = data;	
	  $timeout(videoList.initVideosGood, 0);
		$timeout(videoList.initVideosBad, 0);   
	})
	
    function trustSrc(src) {
	    return $sce.trustAsResourceUrl(src);
	 }
  }
})();
