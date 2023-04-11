> OTEL-JS packages in use:

| Package | |
| ----------- | ----------- |
| @opentelemetry/instrumentation-express | Express auto-instrumentation plugin |
| @opentelemetry/instrumentation-http | Required to be used with `@opentelemetry/instrumentation-express` |
| @opentelemetry/resources | To be used with `semantic-conventions` to identify the application/service's name |
| @opentelemetry/sdk-trace-node | For automatic instrumentation |
| @opentelemetry/semantic-conventions | To be used with `resources` to identify the application/service's name |
| @opentelemetry/instrumentation | To register the auto-instrumentation plugins and the trace provider |

### How to run

```console
npm i
npm run build
npm i autocannon -g
```

```console
➜  http git:(cleanup) ✗ npm start &
➜  http git:(cleanup) ✗
> http@1.0.0 start
> node dist/server.js

Example app listening on port 3000

➜  http git:(cleanup) ✗ autocannon -c 100 -d 5 -p 10 http://localhost:3000
Running 5s test @ http://localhost:3000
100 connections with 10 pipelining factor


┌─────────┬───────┬───────┬───────┬────────┬──────────┬────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev  │ Max    │
├─────────┼───────┼───────┼───────┼────────┼──────────┼────────┼────────┤
│ Latency │ 52 ms │ 56 ms │ 88 ms │ 101 ms │ 58.36 ms │ 8.7 ms │ 143 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 13959   │ 13959   │ 17519   │ 17935   │ 16912.8 │ 1488.6 │ 13953   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 3.34 MB │ 3.34 MB │ 4.19 MB │ 4.29 MB │ 4.04 MB │ 356 kB │ 3.33 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

86k requests in 5.02s, 20.2 MB read
➜  http git:(cleanup) ✗ killall node
➜  http git:(cleanup) ✗
fish: Job 1, 'npm start &' terminated by signal SIGTERM (Polite quit request)
```

```console
➜  http git:(cleanup) ✗ npm run start:tracing &
➜  http git:(cleanup) ✗
> http@1.0.0 start:tracing
> NODE_OPTIONS='--require ./dist/tracing.js' node dist/server.js > out.log


➜  http git:(cleanup) ✗ autocannon -c 100 -d 5 -p 10 http://localhost:3000
Running 5s test @ http://localhost:3000
100 connections with 10 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 199 ms │ 217 ms │ 310 ms │ 619 ms │ 227.75 ms │ 52.94 ms │ 671 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 2993   │ 2993   │ 4663    │ 4775    │ 4300.2  │ 670.01 │ 2992   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 715 kB │ 715 kB │ 1.12 MB │ 1.14 MB │ 1.03 MB │ 160 kB │ 715 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

22k requests in 5.02s, 5.14 MB read
```
