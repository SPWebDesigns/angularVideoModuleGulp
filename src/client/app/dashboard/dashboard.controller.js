(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'logger', 'videoList', '$sce'];
  /* @ngInject */
  function DashboardController($q, logger, videoList,  $sce) {
    var vm = this;
    vm.players=[];
    vm.trustSrc = trustSrc;
//    vm.player2 = videojs('example-video2');

    

    videoList.getvideoList().then(function(data) {
        vm.data = data;
        renderPlayers(vm.data);
    })

    function trustSrc(src) {
	    return $sce.trustAsResourceUrl(src);
	 }

	 var renderPlayers= function(data){
	 	angular.element(document).ready(function () {
	         var i;
	         for(i=0; i<=data.bads.length;i++){
	         	var currentPlayer= data.bads[i].id;
	         	console.log(videojs);
	         	vm.players.push(videojs(currentPlayer));
	         }
	         console.log(vm.players);
	   });
	 	 // angular.element(document).ready(function () {
	   //      vm.player3 = videojs('video3');
	   //      vm.player4 = videojs('video4');
	   //      vm.player5 = videojs('video5');
	   //  });
	 }
  }
})();
