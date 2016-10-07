(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'logger', 'videoList', '$sce', '$state', '$window', '$timeout'];
  /* @ngInject */
  function DashboardController($q, logger, videoList,  $sce, $state, $window, $timeout) {
    var vm = this;
    //$window.location.reload();
    //$state.reload();
    //videojs.players.dispose();
    vm.trustSrc = trustSrc;
	// videoList.getvideoList().then(function(data) {
	//     vm.data = data;	
	// })

	videoList.getvideoList().then(function(data) {
	    vm.data = data;	
	    $timeout(videoList.initVideosGood, 0);
		$timeout(videoList.initVideosBad, 0);   
	})
	
    function trustSrc(src) {
	    return $sce.trustAsResourceUrl(src);
	 }
	 
	//  var renderBadPlayers= function(data){
	// 	for(var i=0; i<= data.bads.length;i++){
 //  			videojs(data.bads[i].id).ready(function(){
	// 	        var player = this;
	// 		});
	//     }
	// }

	// var renderGoodPlayers= function(data){
	// 	console.log('renderPlayers');
	// 	for(var j=0; j<= data.goods.length;j++){
 //  			videojs(data.goods[j].id).ready(function(){
	// 	        var player = this;
	// 		});
	//     }
	// }

  }
})();
