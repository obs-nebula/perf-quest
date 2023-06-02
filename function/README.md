> OTEL-JS packages in use:

| Package |  |
| ----------- | ----------- |
| @opentelemetry/sdk-trace-base | For manual instrumentation  |

### how to run

```
npm install
npm run build
```

```
npm run bench1
```

```console
DISABLED
Raw:
 > 2.070393374741201
 > 2.028397565922921
 > 2.0366598778004072
 > 2.0229265003371544
Average (mean) 2.039594329700421

ENABLED
Raw:
 > 1.2004801920768307
 > 1.2026458208057726
 > 1.156737998843262
 > 1.214329083181542
Average (mean) 1.193548273726852

Winner: DISABLED
Compared with next highest (ENABLED), it's:
41.48% faster
1.71 times as fast
0.23 order(s) of magnitude faster
A LITTLE FASTER
```

```
npm run bench2
```

```console
Progress: 100%

  DISABLED:
    2 057 ops/s, ±0.40%   | fastest

  ENABLED:
    1 201 ops/s, ±2.15%   | slowest, 41.61% slower
```
