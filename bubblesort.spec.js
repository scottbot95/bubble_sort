describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an single-item array', function () {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles a pre-sorted array', function() {
    expect( bubbleSort([1, 2, 3, 4, 8, 10]) ).toEqual( [1, 2, 3, 4, 8, 10] );
  });

  it('handles a multi-item unsorted array', function() {
    expect( bubbleSort([10, 2, 8, 3, 4, 1]) ).toEqual( [1, 2, 3, 4, 8, 10] );
    // expect( bubbleSort([10, 2, 8, 3, 4, 1]) ).toEqual( [1, 2, 3, 4, 8, 10] );
  });

  it('should make the correct number of swaps', function() {
    bubbleSort( [1,3,2] );
    expect(swap.calls.count()).toEqual(1);

    bubbleSort( [4, 1, 2, 3]);
    expect(swap.calls.count()).toEqual(4);
  });

  it('makes the correct number of comparisons', function() {
    bubbleSort( [1, 3, 2] );
    expect(compare.calls.count()).toEqual(3);
  });
});

