### how to run

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
 > 1.238390092879257
 > 1.2406947890818858
 > 1.091703056768559
 > 1.2399256044637321
Average (mean) 1.2026783857983585

ENABLED
Raw:
 > 0.6993006993006993
 > 0.6887052341597796
 > 0.6711409395973155
 > 0.6944444444444444
Average (mean) 0.6883978293755597

Winner: DISABLED
Compared with next highest (ENABLED), it's:
42.76% faster
1.75 times as fast
0.24 order(s) of magnitude faster
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
    1 285 ops/s, ±2.78%   | fastest

  ENABLED:
    759 ops/s, ±2.23%     | slowest, 40.93% slower

Finished 2 cases!
  Fastest: DISABLED
  Slowest: ENABLED
```