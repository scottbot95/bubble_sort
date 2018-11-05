describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5,6]) ).toEqual( [ [1,2,3],[4,5,6] ] );
    expect( split([1,2,3,4,5]) ).toEqual( [ [1,2],[3,4,5] ] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1], [2]) ).toEqual([1,2]);
    expect( merge([1,3], [2,4]) ).toEqual([1,2,3,4]);
    expect( merge([5,6], [3,4]) ).toEqual([3,4,5,6]);
    expect( merge([1,2], [5,8,10]) ).toEqual([1,2,5,8,10]);
  });
});

describe('mergeSort function', function() {
  it('is a function', function() {
    expect(typeof mergeSort).toEqual('function');
  });

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an single-item array', function () {
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles a pre-sorted array', function() {
    expect( mergeSort([1, 2, 3, 4, 8, 10]) ).toEqual( [1, 2, 3, 4, 8, 10] );
  });

  it('handles a multi-item unsorted array', function() {
    expect( mergeSort([10, 2, 8, 3, 4, 1]) ).toEqual( [1, 2, 3, 4, 8, 10] );
    // expect( mergeSort([10, 2, 8, 3, 4, 1]) ).toEqual( [1, 2, 3, 4, 8, 10] );
  });
});
