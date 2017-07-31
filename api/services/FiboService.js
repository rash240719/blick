/**
 * PController
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
      n = FiboService.fib({
        n: n - 1,
        i: i - 1
      }) + FiboService.fib({
        n: n - 2,
        i: i - 1
      });
    }

    return n;
  },

  fibo: function(o) {
    var i = 1,
      n = o;

    n = FiboService.fib({
      n: n,
      i: i
    });

    return n;
  }

};
