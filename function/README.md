# Basic function level benchmark test

> OTEL-JS packages in use:

| Package |  |
| ----------- | ----------- |
| @opentelemetry/sdk-trace-base | For manual instrumentation  |

## How to run

```console
npm install
npm run build
```

```console
npm run bench1
```

```console
DISABLED
Raw:
 > 2.025658338960162
 > 1.9029495718363463
 > 0.9794319294809011
 > 0.9737098344693281
Average (mean) 1.4704374186866842

ENABLED
Raw:
 > 1.189767995240928
 > 0.6321112515802781
 > 0.4859086491739553
 > 0.5834305717619603
Average (mean) 0.7228046169392804

Winner: DISABLED
Compared with next highest (ENABLED), it's:
50.84% faster
2.03 times as fast
0.31 order(s) of magnitude faster
QUITE A BIT FASTER
```

```console
npm run bench2
```

```console
Progress: 100%

  DISABLED:
    1 988 ops/s, ±0.94%   | fastest

  ENABLED:
    771 ops/s, ±10.46%     | slowest, 61.22% slower

Finished 2 cases!
  Fastest: DISABLED
  Slowest: ENABLED
```
