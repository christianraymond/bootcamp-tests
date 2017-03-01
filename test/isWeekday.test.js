describe('The isWeekday function', function(){
  it('should return true when the stringParam does start with M,T,W,T,F', function(){
    assert.equal(true, isWeekday('Monday'));
  });
});

describe('The isWeekday function', function(){
  it('should return false when the stringParam starts with S', function(){
    assert.equal(false, isWeekday('Saturday'));
  });
});
