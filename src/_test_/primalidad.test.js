const trialDivision = require('../primalidad.js');

function primalityTest(testFunction) {
  expect(testFunction(1)).toBe(false);
  expect(testFunction(2)).toBe(true);
  expect(testFunction(3)).toBe(true);
  expect(testFunction(5)).toBe(true);
  expect(testFunction(11)).toBe(true);
  expect(testFunction(191)).toBe(true);
  expect(testFunction(191)).toBe(true);
  expect(testFunction(199)).toBe(true);

  expect(testFunction(-1)).toBe(false);
  expect(testFunction(0)).toBe(false);
  expect(testFunction(4)).toBe(false);
  expect(testFunction(6)).toBe(false);
  expect(testFunction(12)).toBe(false);
  expect(testFunction(14)).toBe(false);
  expect(testFunction(25)).toBe(false);
  expect(testFunction(192)).toBe(false);
  expect(testFunction(200)).toBe(false);
  expect(testFunction(400)).toBe(false);

  // It should also deal with malformed/invalid inputs.
  expect(testFunction(0.5)).toBe(false);
  expect(testFunction(1.3)).toBe(false);
  expect(testFunction(10.5)).toBe(false);
  expect(testFunction(-1)).toBe(false);
  expect(testFunction('')).toBe(false);
}

describe('trialDivision', () => {
  it('Debe detectar números primos', () => {
    primalityTest(trialDivision);
  });
});
