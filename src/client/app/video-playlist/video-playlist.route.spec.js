/* jshint -W117, -W030 */
describe('video-playlist routes', function() {
  describe('state', function() {
    var view = 'app/video-playlist/video-playlist.html';

    beforeEach(function() {
      module('app.video-playlist', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state video-playlist to url /video-playlist ', function() {
      expect($state.href('video-playlist', {})).to.equal('/video-playlist');
    });

    it('should map /video-playlist route to video-playlist View template', function() {
      expect($state.get('video-playlist').templateUrl).to.equal(view);
    });

    it('of video-playlist should work with $state.go', function() {
      $state.go('video-playlist');
      $rootScope.$apply();
      expect($state.is('video-playlist'));
    });
  });
});
