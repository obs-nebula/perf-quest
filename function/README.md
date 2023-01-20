### how to run

```
npm install
```

```
npm run bench1
```

```console
Scores: (bigger is better)

DISABLED
Raw:
 > 1.9588638589618022
 > 1.8198362147406733
 > 1.8018018018018018
 > 1.9011406844106464
Average (mean) 1.8704106399787308

ENABLED
Raw:
 > 1.2353304508956147
 > 1.2330456226880395
 > 1.1778563015312131
 > 1.07469102632993
Average (mean) 1.1802308503611993

Winner: DISABLED
Compared with next highest (ENABLED), it's:
36.9% faster
1.58 times as fast
0.2 order(s) of magnitude faster
A LITTLE FASTER
```


```
npm run bench2
```

```console
Fastest is: DISABLED
```

```
npm run bench3
```

```console
Progress: 100%

  DISABLED:
    1 928 ops/s, ±0.40%   | fastest

  ENABLED:
    1 162 ops/s, ±1.30%   | slowest, 39.73% slower

Finished 2 cases!
  Fastest: DISABLED
  Slowest: ENABLED
```