import { callDoWorkDisabled } from './disabled';
import { callDoWorkEnabled } from './enabled';
import bench from 'bench';

exports.compare = {
  DISABLED: function () {
    callDoWorkDisabled();
  },
  ENABLED: function () {
    callDoWorkEnabled();
  },
};

bench.runMain();
