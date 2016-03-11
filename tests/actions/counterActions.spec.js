import counterActions from 'actions/counterActions';
import counterConstants from 'constants/counterConstants';
import counterReducer from 'reducers/counterReducer';

describe('(Action) Counter', () => {
  describe('increment action', () => {
    it('Should be exported as a function.', () => {
      expect(counterActions.increment).to.be.a('function');
    });

    it('Should return an action with type "COUNTER_INCREMENT".', () => {
      expect(counterActions.increment()).to.have.property(
        'type',
        counterConstants.COUNTER_INCREMENT
      );
    });

    it('Should assign the first argument to the "payload" property.', () => {
      expect(counterActions.increment(5)).to.have.property('payload', 5);
    });

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(counterActions.increment()).to.have.property('payload', 1);
    });
  });

  // ACTIONS
  describe('doubleAsync action', () => {
    let _globalState;
    let _dispatchSpy;
    let _getStateSpy;

    beforeEach(() => {
      _globalState = {
        counter: counterReducer(undefined, {}),
      };
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          counter: counterReducer(_globalState.counter, action),
        };
      });
      _getStateSpy = sinon.spy(() => _globalState);
    });

    it('Should be exported as a function.', () => {
      expect(counterActions.doubleAsync).to.be.a('function');
    });

    it('Should return a function (is a thunk).', () => {
      expect(counterActions.doubleAsync()).to.be.a('function');
    });

    it('Should return a promise from that thunk that gets fulfilled.', () =>
      counterActions
        .doubleAsync()(_dispatchSpy, _getStateSpy)
        .should.eventually
        .be.fulfilled
    );

    it('Should call dispatch and getState exactly once.', () =>
      counterActions.doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.be.calledOnce;
          _getStateSpy.should.be.calledOnce;
        })
    );

    it('Should produce a state that is double the previous state.', () => {
      _globalState = {
        counter: {
          number: 2,
        },
      };

      return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.be.calledOnce;
          _getStateSpy.should.be.calledOnce;
          expect(_globalState.counter.number).to.equal(4);
          return counterActions.doubleAsync()(_dispatchSpy, _getStateSpy);
        })
        .then(() => {
          _dispatchSpy.should.be.calledTwice;
          _getStateSpy.should.be.calledTwice;
          expect(_globalState.counter.number).to.equal(8);
        });
    });
  });
});
