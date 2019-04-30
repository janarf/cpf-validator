const expect = require('chai').expect;
const tools = require('../index');

describe('cpfValidator', () => {
  it('Return true for valid CPF', () => {
    expect(tools.cpfValidator('06944320673')).to.be.true;
  });
  it('Return false for equal digits CPF', () => {
    expect(tools.cpfValidator('11111111111')).to.be.false;
  });
  it('Return false for invalid CPF', () => {
    expect(tools.cpfValidator('06944530677')).to.be.false;
  });
  it('Return false for string with letters', () => {
    expect(tools.cpfValidator('069445aa677')).to.be.false;
  });
  it('Return false for empty string', () => {
    expect(tools.cpfValidator('')).to.be.false;
  });
});