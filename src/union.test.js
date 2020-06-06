import union from './union';

describe('when union arrays', () => {
  it('should return union of 2 arrays', () => {
    const afterUnion = union([2], [1, 2]);
    expect(afterUnion).toEqual([2, 1]);
  });

  it('should find union from a list of arrays', () => {
    const afterUnion = union([2], [1, 2], [2, 3]);
    expect(afterUnion).toEqual([2, 1, 3]);
  });

  it('should not flatten nested arrays', () => {
    const afterUnion = union([1, 3, 2], [1, [5]], [2, [4]]);
    expect(afterUnion).toEqual([1, 3, 2, [5], [4]]);
  });

  it('should order union by their first encounter', () => {
    const afterUnion = union([10, 20], [1, 30, 10], [0, 40]);
    expect(afterUnion).toEqual([10, 20, 1, 30, 0, 40]);
  });
});
