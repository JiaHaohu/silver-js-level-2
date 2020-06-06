import maxMap from './max-map';

describe('when calling maxMap()', () => {
  it('should return max value for numbers', () => {
    expect(maxMap([-100, -15, -50, -10], value => value)).toBe(-10);
  });

  it('should ignore NaN', () => {
    expect(maxMap([NaN, -1000], value => value)).toBe(-1000);
  });

  it.each([
    [[Number.MAX_VALUE, Number.POSITIVE_INFINITY], Number.POSITIVE_INFINITY],
    [[Number.MIN_VALUE, Number.NEGATIVE_INFINITY], Number.MIN_VALUE]
  ])('should work with infinity', (array, expected) => {
    expect(maxMap(array, value => value)).toBe(expected);
  });

  it('should return undefined if the input array is empty', () => {
    expect(maxMap([], value => value)).toBeUndefined();
  });

  it('should return undefined if the mapped results are all null, undefined or NaN', () => {
    expect(maxMap([null, undefined, NaN], value => value)).toBeUndefined();
  });

  it('should return undefined if the input it self is null or undefined value', () => {
    expect(maxMap(null, value => value)).toBeUndefined();
    expect(maxMap(undefined, value => value)).toBeUndefined();
  });

  it('should work with strings', () => {
    expect(maxMap(['a', 'b', 'c', 'd'], value => value)).toBe('d');
  });

  it('should return mapped value', () => {
    const input = [
      { name: 'John', age: 10 },
      { name: 'Tom', age: 20 },
      { name: 'Bob', age: 30 }
    ];

    expect(maxMap(input, value => value.age)).toBe(30);
  });
});
