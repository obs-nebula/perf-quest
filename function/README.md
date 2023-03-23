### how to run

> OTEL-JS packages in use:

| Package | Why |
| ----------- | ----------- |
| @opentelemetry/sdk-trace-base | For manual instrumentation  |
| @opentelemetry/api | To get the trace instance and control span creation |

```
npm install
npm run build
```

```
npm run bench1
```

```console
Scores: (bigger is better)

DISABLED
Raw:
 > 1.8099547511312217
 > 1.1627906976744187
 > 1.3245033112582782
 > 1.2254901960784315
Average (mean) 1.3806847390355876

ENABLED
Raw:
 > 1.2322858903265557
 > 0.7490636704119851
 > 0.7326007326007326
 > 0.6489292667099286
Average (mean) 0.8407198900123005

Winner: DISABLED
Compared with next highest (ENABLED), it's:
39.11% faster
1.64 times as fast
0.22 order(s) of magnitude faster
A LITTLE FASTER
```

```
npm run bench2
```

```console
Progress: 100%

  DISABLED:
    1 587 ops/s, ±4.97%   | fastest

  ENABLED:
    624 ops/s, ±1.26%     | slowest, 60.68% slower

Finished 2 cases!
  Fastest: DISABLED
  Slowest: ENABLED
```