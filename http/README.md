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


┌─────────┬───────┬───────┬───────┬────────┬──────────┬───────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev │ Max    │
├─────────┼───────┼───────┼───────┼────────┼──────────┼───────┼────────┤
│ Latency │ 52 ms │ 58 ms │ 96 ms │ 100 ms │ 62.69 ms │ 11 ms │ 138 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴───────┴────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬─────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Req/Sec   │ 12983  │ 12983  │ 16495   │ 17775   │ 15755.2 │ 1802.46 │ 12982  │
├───────────┼────────┼────────┼─────────┼─────────┼─────────┼─────────┼────────┤
│ Bytes/Sec │ 3.1 MB │ 3.1 MB │ 3.94 MB │ 4.25 MB │ 3.77 MB │ 430 kB  │ 3.1 MB │
└───────────┴────────┴────────┴─────────┴─────────┴─────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

80k requests in 5.02s, 18.8 MB read
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


┌─────────┬────────┬────────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 203 ms │ 229 ms │ 382 ms │ 416 ms │ 240.7 ms │ 45.28 ms │ 462 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬────────┬────────┬─────────┬────────┬────────┬────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%  │ Avg    │ Stdev  │ Min    │
├───────────┼────────┼────────┼─────────┼────────┼────────┼────────┼────────┤
│ Req/Sec   │ 2801   │ 2801   │ 4455    │ 4591   │ 4052.4 │ 666.19 │ 2801   │
├───────────┼────────┼────────┼─────────┼────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 670 kB │ 670 kB │ 1.06 MB │ 1.1 MB │ 968 kB │ 159 kB │ 669 kB │
└───────────┴────────┴────────┴─────────┴────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.
# of samples: 5

21k requests in 5.02s, 4.84 MB read
```