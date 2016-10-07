(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'logger', 'videoList', '$sce'];
  /* @ngInject */
  function DashboardController($q, logger, videoList,  $sce) {
    var vm = this;
    //videojs.players.dispose();
    vm.trustSrc = trustSrc;
	
	videoList.getvideoList().then(function(data) {
	    vm.data = data;	
	    setTimeout(function(){ 
			renderBadPlayers(vm.data); 
		}, 500);
		setTimeout(function(){ 
			renderGoodPlayers(vm.data); 
		}, 500);   
	})
	
    function trustSrc(src) {
	    return $sce.trustAsResourceUrl(src);
	 }
	 
	 var renderBadPlayers= function(data){
		for(var i=0; i<= data.bads.length;i++){
  			videojs(data.bads[i].id).ready(function(){
		        var player = this;
			});
	    }
	}

	var renderGoodPlayers= function(data){
		console.log('renderPlayers');
		for(var j=0; j<= data.goods.length;j++){
  			videojs(data.goods[j].id).ready(function(){
		        var player = this;
			});
	    }
	}

  }
})();
