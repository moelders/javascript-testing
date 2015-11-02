describe('services:tools', function() {
  it('should be defined an be an object', function() {
    expect(tools).not.to.be.undefined;
    expect(tools).to.be.an('object');
  });

  it('should have the next methods and properties', function() {
    expect(tools).to.have.property('sum').which.is.a('function');
    expect(tools).to.have.property('getRandomNumbers').which.is.a('function');
  });

  describe('method', function() {
    describe('sum(*, *)', function() {
      it('should return a number', function() {
        expect(tools.sum(10, 2)).to.be.a('number');
      });

      it('should return the addition of integer and float numbers', function() {
        expect(tools.sum(10, 2)).to.be.equal(12);
        expect(tools.sum(21, 1.9)).to.be.equal(22.9);
      });

      it('should return the addition of numbers in string format', function() {
        expect(tools.sum('21', 3)).to.be.equal(24);
        expect(tools.sum(.5, '1.2')).to.be.equal(1.7);
      });

      it('should return \'0\' if the parameters are missing', function() {
        expect(tools.sum()).to.be.equal(0);
      });

      it('should use \'0\' as default value if the parameter is missing',
        function() {
          expect(tools.sum(null, 5)).to.be.equal(5);
          expect(tools.sum(5)).to.be.equal(5);
        }
      );

      it('should use \'0\' as default value if the parameter is not a number ' +
          'nor a string-number',
        function() {
          expect(tools.sum({}, 5)).to.be.equal(5);
          expect(tools.sum(5, function() {})).to.be.equal(5);
        }
      );
    });

    describe('getRandomNumbers', function() {
      var randomValue = '999',
        server;

      before(function() {
        server = sinon.fakeServer.create();

        server.respondWith(randomValue);
      });

      after(function() {
        server.restore();
      });

      it('should return a random number', function(done) {
        tools.getRandomNumbers().then(
          function(value) {
            expect(value).to.be.equal(parseInt(randomValue));

            done();
          },
          done
        );

        server.respond();
      });
    });
  });
});
