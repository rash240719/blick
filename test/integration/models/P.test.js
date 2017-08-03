describe('PModel', function() {

  describe('#find()', function() {
    it('should check find function', function(done) {
      P.find()
        .then(function(results) {
          // some tests
          done();
        })
        .catch(done);
    });
  });
});
