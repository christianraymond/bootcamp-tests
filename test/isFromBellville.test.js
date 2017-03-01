
describe("The isFromBellville function", function(){

    it("should return true when the registration numbers starts with CY", function(){

        assert.equal(true, isFromBellville('CY 9325'));
    });
});

describe("The isFromBellville function", function(){
  it("should return false when the registration numbers starts with CA", function(){
    assert.equal(false, isFromBellville('CA'));
  });
});
