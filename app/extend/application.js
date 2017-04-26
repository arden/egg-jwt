'use strict';

const koajwt = require('../../lib/koa_jwt');
const JWT = Symbol('Application#jwt');

module.exports = {
  get jwtAuth() {
    if (!this[JWT]) {
      this[JWT] = koajwt(this.config.jwtAuth);
      this[JWT].sign = koajwt.sign;
      this[JWT].verify = koajwt.verify;
      this[JWT].decode = koajwt.decode;
    }
    return this[JWT];
  },
};
