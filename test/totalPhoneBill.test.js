describe('The totalPhoneBill', function(){
  it('should return the amount of bills spent on each phone call made or sms sent', function(){
    assert.equal(2.75, totalPhoneBill('call'))
  });
});
