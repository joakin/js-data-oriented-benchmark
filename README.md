Benchmark to see if data oriented design in JS can pay off

How to run:

    npm install
    NODE_ENV=production node index.js

Some runs on my laptop:

```
js-data-oriented-benchmark → NODE_ENV=production node index.js
typed array x 409 ops/sec ±1.13% (82 runs sampled)
array x 402 ops/sec ±1.06% (81 runs sampled)
structure of array x 430 ops/sec ±0.92% (80 runs sampled)
array of structure x 390 ops/sec ±0.56% (83 runs sampled)
Fastest is structure of array
js-data-oriented-benchmark → NODE_ENV=production node index.js
typed array x 404 ops/sec ±0.82% (80 runs sampled)
array x 404 ops/sec ±0.90% (79 runs sampled)
array of structure x 392 ops/sec ±1.10% (84 runs sampled)
structure of array x 403 ops/sec ±0.96% (81 runs sampled)
Fastest is array,typed array,structure of array
js-data-oriented-benchmark → NODE_ENV=production node index.js
typed array x 431 ops/sec ±0.56% (83 runs sampled)
array x 452 ops/sec ±0.25% (85 runs sampled)
array of structure x 394 ops/sec ±1.17% (84 runs sampled)
structure of array x 403 ops/sec ±1.04% (82 runs sampled)
Fastest is array
js-data-oriented-benchmark → NODE_ENV=production node index.js
typed array x 421 ops/sec ±1.10% (83 runs sampled)
array x 435 ops/sec ±1.09% (83 runs sampled)
array of structure x 384 ops/sec ±1.15% (83 runs sampled)
structure of array x 411 ops/sec ±0.48% (84 runs sampled)
Fastest is array
```
🤷‍♂️
