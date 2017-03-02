describe('The fromWhere function', function(){
  it('should return from Cape Town when the car registration number starts with CA', function(){
    assert.equal('from Cape Town', fromWhere('CA'))
  });
});
