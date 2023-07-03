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
npm install
npm run build
npm i autocannon -g
```

```console
➜  http git:(cleanup) ✗ npm start &
➜  http git:(cleanup) ✗
> http@1.0.0 start
> node dist/server.js

Example app listening on port 3000

➜  http git:(main) ✗ autocannon -c 100 -d 5 -p 10 http://localhost:3000
Running 5s test @ http://localhost:3000
100 connections with 10 pipelining factor


┌─────────┬───────┬───────┬───────┬────────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼────────┼──────────┼─────────┼────────┤
│ Latency │ 52 ms │ 56 ms │ 94 ms │ 103 ms │ 58.91 ms │ 9.99 ms │ 148 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 13639   │ 13639   │ 17471   │ 18063   │ 16756   │ 1611.81 │ 13632   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.26 MB │ 3.26 MB │ 4.18 MB │ 4.32 MB │ 4.01 MB │ 386 kB  │ 3.26 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

85k requests in 5.02s, 20 MB read
```

> killall node


```console
➜  http git:(cleanup) ✗ npm run start:tracing &
➜  http git:(cleanup) ✗
> http@1.0.0 start:tracing
> NODE_OPTIONS='--require ./dist/tracing.js' node dist/server.js > out.log


➜  http git:(main) ✗ autocannon -c 100 -d 5 -p 10 http://localhost:3000
Running 5s test @ http://localhost:3000
100 connections with 10 pipelining factor


┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 204 ms │ 219 ms │ 360 ms │ 382 ms │ 233.83 ms │ 41.09 ms │ 429 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 2871   │ 2871   │ 4391    │ 4671    │ 4176.61 │ 663.44 │ 2871   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 687 kB │ 687 kB │ 1.05 MB │ 1.12 MB │ 998 kB  │ 158 kB │ 686 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

22k requests in 5.02s, 4.99 MB read
```
