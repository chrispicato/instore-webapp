import counterActions from 'actions/counterActions';
import counterConstants from 'constants/counterConstants';
import counterReducer from 'reducers/counterReducer';

describe('(Action) Counter', function () {
  describe('increment action', function () {
    it('Should be exported as a function.', function () {
      expect(counterActions.increment).to.be.a('function');
    });

    it('Should return an action with type "COUNTER_INCREMENT".', function () {
      expect(counterActions.increment()).to.have.property('type', counterConstants.COUNTER_INCREMENT);
    });

    it('Should assign the first argument to the "payload" property.', function () {
      expect(counterActions.increment(5)).to.have.property('payload', 5);
    });

    it('Should default the "payload" property to 1 if not provided.', function () {
      expect(counterActions.increment()).to.have.property('payload', 1);
    });
  });

  // ACTIONS
  describe('doubleAsync action', function () {
    let _globalState;
    let _dispatchSpy;
    let _getStateSpy;

    beforeEach(function () {
      _globalState = {
        counter: counterReducer(undefined, {})
      };
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          counter: counterReducer(_globalState.counter, action)
        };
      });
      _getStateSpy = sinon.spy(() => {
        return _globalState;
      });
    });

    it('Should be exported as a function.', function () {
      expect(counterActions.doubleAsync).to.be.a('function');
    });

    it('Should return a function (is a thunk).', function () {
      expect(counterActions.doubleAsync()).to.be.a('function');
    });

    it('Should return a promise from that thunk that gets fulfilled.', function () {
      return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled;
    });

    it('Should call dispatch and getState exactly once.', function () {
      return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce;
          _getStateSpy.should.have.been.calledOnce;
        });
    });

    it('Should produce a state that is double the previous state.', function () {
      _globalState = { 
        counter: {
          number: 2
        } 
      };

      return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce;
          _getStateSpy.should.have.been.calledOnce;
          expect(_globalState.counter.number).to.equal(4);
          return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy);
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice;
          _getStateSpy.should.have.been.calledTwice;
          expect(_globalState.counter.number).to.equal(8);
        });
    });
  });
});