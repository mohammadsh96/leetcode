const {search}=require('./index')

describe('search', () => { it('should return the index of the target element when it is present', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    const expected = 4;
    const result = search(arr, target);
    expect(result).toEqual(expected);
  });
  
  it('should return -1 when the target element is not present', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    const expected = -1;
    const result = search(arr, target);
    expect(result).toEqual(expected);
  });
  
  it('should return the index of the target element when it is at the beginning of the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 1;
    const expected = 0;
    const result = search(arr, target);
    expect(result).toEqual(expected);
  });
  
  it('should return the index of the target element when it is at the end of the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 9;
    const expected = 8;
    const result = search(arr, target);
    expect(result).toEqual(expected);
  });
  
  it('should return -1 when the array is empty', () => {
    const arr = [];
    const target = 1;
    const expected = -1;
    const result = search(arr, target);
    expect(result).toEqual(expected);
  });
});