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
│ Latency │ 52 ms │ 57 ms │ 84 ms │ 101 ms │ 58.27 ms │ 8.18 ms │ 133 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 14087   │ 14087   │ 17599   │ 17855   │ 16944.8 │ 1435.21 │ 14083   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.37 MB │ 3.37 MB │ 4.21 MB │ 4.27 MB │ 4.05 MB │ 343 kB  │ 3.37 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

86k requests in 5.02s, 20.2 MB read
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


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 168 ms │ 240 ms │ 428 ms │ 522 ms │ 252.1 ms │ 52.88 ms │ 582 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬─────────┬────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%   │ Avg    │ Stdev  │ Min    │
├───────────┼────────┼────────┼────────┼─────────┼────────┼────────┼────────┤
│ Req/Sec   │ 2875   │ 2875   │ 4065   │ 4335    │ 3859.8 │ 523.05 │ 2874   │
├───────────┼────────┼────────┼────────┼─────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 687 kB │ 687 kB │ 972 kB │ 1.04 MB │ 922 kB │ 125 kB │ 687 kB │
└───────────┴────────┴────────┴────────┴─────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

20k requests in 5.02s, 4.61 MB read
```
