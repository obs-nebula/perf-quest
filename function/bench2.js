const Benchmark = require('benchmark');
const disabled = require('./disabled.js');
const enabled = require('./enabled.js');

const suite = new Benchmark.Suite();
suite
.add('DISABLED', disabled.callDoWork)
.add('ENABLED', enabled.callDoWork)
.on('complete', () => {
 console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
})
.run();