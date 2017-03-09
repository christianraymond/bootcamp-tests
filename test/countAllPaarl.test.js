describe('The countAllFromPaarl', function(){
  it('should count all Paar car registration numbers if starts with CJ', function(){
    assert.equal(1, countAllPaarl('CJ'))
  });
});
