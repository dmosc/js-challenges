const factorial = require('../factorial.js');

describe('factorial', () => {
  it('Debe calcular el numer factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
  });

  it('handles malformed/invalid inputs', () => {
    expect(() => factorial(-1)).toThrow(
      'number must be a valid integer greater than or equal to 0; got -1'
    );

    expect(() => factorial('')).toThrow(
      'number must be a valid integer greater than or equal to 0; got '
    );

    expect(() => factorial(1.1)).toThrow(
      'number must be a valid integer greater than or equal to 0; got 1.1'
    );
  });
});
