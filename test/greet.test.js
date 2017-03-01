// var useDescribeForMochaTest = require('mocha').describe;
// var useAssertForChaiTest = require('chai').assert;

describe('The greet function', function(){

    it('should greet Chris correctly', function(){

        assert.equal('Hello, Chris', greet('Chris'));
    });
});

describe('The greet function', function(){

    it('should greet  Andrew correctly', function(){

        assert.equal('Hello, Andrew', greet('Andrew'));
    });
});
