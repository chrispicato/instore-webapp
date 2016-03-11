import counterActions from 'actions/counterActions';
import counterReducer from 'reducers/counterReducer';

describe('(Reducer) Counter', () => {
  it('Should be a function.', () => {
    expect(counterReducer).to.be.a('function');
  });

  it('Should initialize with a state of 0 (Number).', () => {
    const state = counterReducer(undefined, {});
    expect(state.number).to.equal(0);
  });

  it('Should return the previous state if an action was not matched.', () => {
    let state = counterReducer(undefined, {});
    expect(state.number).to.equal(0);
    state = counterReducer(state, {
      type: '@@@@@@@',
    });
    expect(state.number).to.equal(0);
    state = counterReducer(state, counterActions.increment(5));
    expect(state.number).to.equal(5);
    state = counterReducer(state, {
      type: '@@@@@@@',
    });
    expect(state.number).to.equal(5);
  });
});
