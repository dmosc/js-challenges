const fibonacci = require('../fibonacci.js');

describe('fibonacci', () => {
  it('Debe calcular fibonacci correctamente', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it('handles malformed/invalid inputs', () => {
    expect(() => fibonacci(-1)).toThrow(
      'n must be a valid integer greater than or equal to 0; got -1'
    );

    expect(() => fibonacci('')).toThrow(
      'n must be a valid integer greater than or equal to 0; got '
    );

    expect(() => fibonacci(1.1)).toThrow(
      'n must be a valid integer greater than or equal to 0; got 1.1'
    );
  });
});
