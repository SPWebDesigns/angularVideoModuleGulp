/* jshint -W117, -W030 */
describe('VideoPlayListController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.video-playlist');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('VideoPlayListController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('VideoPlayList controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of VideoPlayList', function() {
        expect(controller.title).to.equal('VideoPlayList');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
