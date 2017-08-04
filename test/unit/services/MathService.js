require('../../bootstrap.test');
var mdescribe = require('mocha-repeat');
var assert = require('assert');
var results = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437];

mdescribe('MathService', results, function(res) {
  var i = results.indexOf(res);

  it('should check fibo(' + i + ')', function() {
    var r = MathService.fibo(i);
    console.log('result should be ' + res);
    console.log('\tfibo(' + i + '): ' + r);
    assert.equal(res, r);
  });

  it('should check newFibo(' + i + ')', function() {
    var r = MathService.newFibo(i);
    console.log('\tnewFibo(' + i + '): ' + r);
    assert.equal(res, r);
  });
});
