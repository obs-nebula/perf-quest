import b from 'benny';

import { callDoWorkDisabled } from './disabled';
import { callDoWorkEnabled } from './enabled';
import { error } from 'console';

b.suite(
  'Foo',
  b.add('DISABLED', () => {
    callDoWorkDisabled();
  }),
  b.add('ENABLED', () => {
    callDoWorkEnabled();
  }),
  b.cycle(),
  b.complete()
).catch(error);
