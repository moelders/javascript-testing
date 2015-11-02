describe('services:math', function() {
  var math = window.math;

  it('should be defined an be an object', function() {
    expect(math).not.to.be.undefined;
    expect(math).to.be.an('object');
  });

  it('should have the next methods and properties', function() {
    expect(math).to.have.property('total').which.is.a('number');
    expect(math).to.have.property('div').which.is.a('function');
    expect(math).to.have.property('add').which.is.a('function');
    expect(math).to.have.property('addRandom').which.is.a('function');
  });

  describe('method', function() {
    describe('div', function() {
      it('should return a number', function() {
        expect(math.div(10, 2)).to.be.a('number');
      });

      it('should return the result of the division', function() {
        expect(math.div(10, 2)).to.be.equal(5);
        expect(math.div(21, 3)).to.be.equal(7);
      });

      it('should throw an exception if the second parameter is \'0\'',
        function() {
          expect(function() {
            math.div(10, 0);
          }).to.throw('divisor-zero');
        }
      );
    });

    describe('add', function() {
      beforeEach(function() {
        math.total = 0;

        sinon.stub(window.tools, 'sum')
          .withArgs(0, 5).returns(5)
          .withArgs(5, 10).returns(15);
      });

      afterEach(function() {
        window.tools.sum.restore();
      });

      it('should return nothing', function() {
        expect(math.add(1)).to.be.undefined;

        expect(window.tools.sum).to.have.been.calledOnce;
        expect(window.tools.sum).to.have.been.calledWith(0, 1);
      });

      it('should add the current value to the total one', function() {
        math.add(5);

        expect(window.tools.sum).to.have.been.calledOnce;
        expect(window.tools.sum).to.have.been.calledWith(0, 5);
        expect(math.total).to.be.equal(5);

        math.add(10);

        expect(window.tools.sum).to.have.been.calledTwice;
        expect(window.tools.sum).to.have.been.calledWith(5, 10);
        expect(math.total).to.be.equal(15);
      });
    });

    describe('addRandom', function() {
      var randomValue,
        defer;

      beforeEach(function() {
        math.total = 0;
        randomValue = 999;

        defer = new jQuery.Deferred();
        defer.resolve(randomValue);

        sinon.stub(window.tools, 'getRandomNumbers').returns(defer.promise());
      });

      afterEach(function() {
        tools.getRandomNumbers.restore();
      });

      it('should add the current value to the total one using promise',
        function(done) {
          math.addRandom().then(
            function() {
              expect(window.tools.getRandomNumbers).to.have.been.calledOnce;
              expect(math.total).to.be.equal(parseInt(randomValue, 10));

              done();
            },
            done
          );
        }
      );
    });
  });
});
