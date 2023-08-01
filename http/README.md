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


┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 52 ms │ 56 ms │ 91 ms │ 98 ms │ 57.63 ms │ 9.08 ms │ 148 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 14023   │ 14023   │ 17807   │ 18111   │ 17124   │ 1557.78 │ 14021   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.35 MB │ 3.35 MB │ 4.26 MB │ 4.33 MB │ 4.09 MB │ 372 kB  │ 3.35 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

87k requests in 5.02s, 20.5 MB read
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
│ Latency │ 174 ms │ 191 ms │ 333 ms │ 372 ms │ 201.99 ms │ 40.18 ms │ 702 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Req/Sec   │ 3251   │ 3251   │ 5263    │ 5411    │ 4861.4  │ 818.01 │ 3251   │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼────────┼────────┤
│ Bytes/Sec │ 777 kB │ 777 kB │ 1.26 MB │ 1.29 MB │ 1.16 MB │ 195 kB │ 777 kB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

25k requests in 5.02s, 5.81 MB read
```
