/* jshint -W117, -W030 */
describe('video-list routes', function() {
  describe('state', function() {
    var view = 'app/video-list/video-list.html';

    beforeEach(function() {
      module('app.video-list', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state video-list to url / ', function() {
      expect($state.href('video-list', {})).to.equal('/');
    });

    it('should map /video-list route to video-list View template', function() {
      expect($state.get('video-list').templateUrl).to.equal(view);
    });

    it('of video-list should work with $state.go', function() {
      $state.go('video-list');
      $rootScope.$apply();
      expect($state.is('video-list'));
    });
  });
});
