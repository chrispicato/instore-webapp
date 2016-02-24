import counterConstants from 'constants/counterConstants';

describe('(Constant) Counter', function () {
  it('Should export a constant COUNTER_INCREMENT.', function () {
    expect(counterConstants.COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT');
  });
});