(function() {
  'use strict';

  angular
    .module('app.video-list')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'video-list',
        config: {
          url: '/',
          templateUrl: 'app/video-list/video-list.html',
          controller: 'VideoListController',
          controllerAs: 'vm',
          title: 'Video List',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Video List'
          }
        }
      }
    ];
  }
})();
