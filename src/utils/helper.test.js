import {truncateArray} from './helper';

describe('truncate array function', () => {

  it('should truncate an array into 3 elements', () => {
      const testArr= ['a', 'b', 'c', 'd', 'e', 'f'];
      const truncateArr = truncateArray(testArr, 3);
  
    expect(truncateArr).toEqual(['a', 'b', 'c'])
  });

});