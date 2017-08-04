/**
 * MathService
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  sigDig: function(o) {
    var x = o.x,
      n = o.n;

    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  },

  newFibo: function(o) {
    if (o < 1) {
      return 0;
    } else {
      var n = o,
        phi = (Math.sqrt(5) + 1) / 2;

      return MathService.sigDig({
        x: (Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5),
        n: 0
      });
    }
  },

  fib: function(o) {
    var n = o.n,
      i = o.i;

    if (i < n) {
      n = MathService.fib({
        n: n - 1,
        i: i
      }) + MathService.fib({
        n: n - 2,
        i: i
      });
      i++;
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
