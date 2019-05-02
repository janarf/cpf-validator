const expect = require('chai').expect;
const cpfValidator = require('../index');

describe('cpfValidator', () => {
  it('Return true for valid CPF', () => {
    expect(cpfValidator('06944320673')).to.be.true;
  });
  it('Return false for equal digits CPF', () => {
    expect(cpfValidator('11111111111')).to.be.false;
  });
  it('Return false for invalid CPF', () => {
    expect(cpfValidator('06944530677')).to.be.false;
  });
  it('Return false for string with letters', () => {
    expect(cpfValidator('069445aa677')).to.be.false;
  });
  it('Return false for empty string', () => {
    expect(cpfValidator('')).to.be.false;
  });
});