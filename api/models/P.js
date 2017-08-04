/**
 * P.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    value: {
      type: 'number',
      required: true
    },
    result: {
      type: 'number',
      required: true
    },
    operation: {
      type: 'string',
      required: true,
      isIn: ['Fibo', 'Tri', 'TriSum']
    }
  },

};
