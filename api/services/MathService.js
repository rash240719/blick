/**
 * MathService
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fib: function(o) {
    var n = o.n,
      i = o.i;

    if (i < n) {
      i++;
      n = MathService.fib({
        n: n - 1,
        i: i - 1
      }) + MathService.fib({
        n: n - 2,
        i: i - 1
      });
    }

    return n;
  },

  fibo: function(o) {
    var i = 1,
      n = o;

    n = MathService.fib({
      n: n,
      i: i
    });

    return n;
  },

  triSum: function(n) {
    //var r = 0;
    var r = 1;
    for (var i = 1; i < n; i++) {
      sails.log.info(i);
      r += MathService.tri(i);
    }

    return r;
  },

  tri: function(n) {
    if (n < 1) {
      return 0;
    } else {
      var r = 0;

      for (var j = 1; j <= n; j++) {
        r += j;
      }

      return r;
    }
  }
};
