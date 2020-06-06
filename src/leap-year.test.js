import isLeapYear from './leap-year';

describe('when calculating leap years', () => {
  it('should work with non century years - 1996', () => {
    expect(isLeapYear(1996)).toBeTruthy();
  });

  it('should work with non century years - 1997', () => {
    expect(isLeapYear(1997)).toBeFalsy();
  });

  it('should work with ridiculously futuristic non century years - 34992', () => {
    expect(isLeapYear(34992)).toBeTruthy();
  });

  it('should work with century years - 1990', () => {
    expect(isLeapYear(1900)).toBeFalsy();
  });

  it('should work with century years - 1600', () => {
    expect(isLeapYear(1600)).toBeTruthy();
  });

  it('should work with century years - 700', () => {
    expect(isLeapYear(700)).toBeFalsy();
  });
});
