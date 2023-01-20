const disabled = require('./disabled.js');
const enabled = require('./enabled.js');

exports.compare = {
  'DISABLED': function () {
    disabled.callDoWork();
  },
  'ENABLED': function () {
    enabled.callDoWork();
  }
};

require('bench').runMain();
