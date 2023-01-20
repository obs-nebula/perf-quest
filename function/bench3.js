const b = require('benny');

const disabled = require('./disabled.js');
const enabled = require('./enabled.js');

b.suite(
  'Foo',
  b.add('DISABLED', () => {
    disabled.callDoWork();
  }),
  b.add('ENABLED', () => {
    enabled.callDoWork();
  }),
  b.cycle(),
  b.complete()
);