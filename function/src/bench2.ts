import Benchmark from 'benchmark';

import { callDoWorkDisabled } from './disabled';
import { callDoWorkEnabled } from './enabled';

const suite = new Benchmark.Suite();
suite
.add('DISABLED', callDoWorkDisabled)
.add('ENABLED', callDoWorkEnabled)
.on('complete', () => {
 console.log(`Fastest is: ${suite.filter('fastest').map('name')}`);
})
.run();