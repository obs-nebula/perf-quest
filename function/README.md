### how to run

> OTEL-JS packages in use:

| Package |  |
| ----------- | ----------- |
| @opentelemetry/sdk-trace-base | For manual instrumentation  |
| @opentelemetry/api | To get the trace instance and control span creation |

```
npm install
npm run compile
```

```
npm run bench1
```

```console
Scores: (bigger is better)

DISABLED
Raw:
 > 2.050580997949419
 > 1.9697964543663822
 > 1.2135922330097086
 > 1.224739742804654
Average (mean) 1.614677357032541

ENABLED
Raw:
 > 1.243781094527363
 > 0.7352941176470589
 > 0.7168458781362007
 > 0.7215007215007215
Average (mean) 0.8543554529528361

Winner: DISABLED
Compared with next highest (ENABLED), it's:
47.09% faster
1.89 times as fast
0.28 order(s) of magnitude faster
A LITTLE FASTER
```

```
npm run bench2
```

```console
Progress: 100%

  DISABLED:
    2 067 ops/s, ±0.52%   | fastest

  ENABLED:
    1 101 ops/s, ±4.18%   | slowest, 46.73% slower
```