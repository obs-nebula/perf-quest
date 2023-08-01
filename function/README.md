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
 > 1.2106537530266344
 > 1.3540961408259986
 > 1.2706480304955527
 > 1.4154281670205238
Average (mean) 1.3127065228421773

ENABLED
Raw:
 > 0.6565988181221274
 > 0.6988120195667366
 > 0.6540222367560498
 > 0.8116883116883117
Average (mean) 0.7052803465333064

Winner: DISABLED
Compared with next highest (ENABLED), it's:
46.27% faster
1.86 times as fast
0.27 order(s) of magnitude faster
A LITTLE FASTER
```

```
npm run bench2
```

```console
Progress: 100%

  DISABLED:
    2 083 ops/s, ±0.41%   | fastest

  ENABLED:
    1 049 ops/s, ±6.02%   | slowest, 49.64% slower
```
