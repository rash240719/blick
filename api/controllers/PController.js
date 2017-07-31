/**
 * PController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fibo: function(req, res) {
    sails.log.info('Entering method');

    var n = req.allParams().n;
    var r;
    sails.log.debug(n);
    P.find({
      value: n
    }).limit(1).exec(function(err, resp) {
      if (err) {
        sails.log.error(err);
      } else {
        sails.log.info('No errors, so far');
        if (resp.length > 0) {
          resp = resp[0];
          sails.log.debug(resp);
          r = resp.result;

          res.json({
            value: n,
            result: r
          });
        } else {
          sails.log.info('first time');
          r = FiboService.fibo(n);

          sails.log.debug('r:');
          sails.log.debug(r);

          P.create({
            value: n,
            result: r
          }).exec(function(err) {
            if (err) {
              sails.log.error(err);
            } else {
              res.json({
                value: n,
                result: r
              });
            }
          });
        }
      }
    });
  }
};
