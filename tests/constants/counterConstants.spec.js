import counterConstants from 'constants/counterConstants';

describe('(Constant) Counter', () => {
  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(counterConstants.COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT');
  });
});
