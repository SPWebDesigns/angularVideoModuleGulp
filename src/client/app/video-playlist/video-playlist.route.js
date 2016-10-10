(function() {
  'use strict';

  angular
    .module('app.video-playlist')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'video-playlist',
        config: {
          url: '/video-playlist',
          templateUrl: 'app/video-playlist/video-playlist.html',
          controller: 'VideoPlayListController',
          controllerAs: 'vm',
          title: 'VideoPlayList',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Video Playlist'
          }
        }
      }
    ];
  }
})();
