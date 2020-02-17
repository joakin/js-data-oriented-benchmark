const Benchmark = require("benchmark");
let suite = new Benchmark.Suite();

const NUM_ELEMENTS = 100000;
const NUM_FIELDS = 3;

const SIZE = NUM_ELEMENTS * NUM_FIELDS;
let typedArray = new Int32Array(SIZE);
for (let i = 0; i < SIZE; i++) {
  typedArray[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
}

let arrayNumbers = new Array(SIZE);
for (let i = 0; i < SIZE; i++) {
  arrayNumbers[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
}

let aos = new Array(NUM_ELEMENTS);
for (let i = 0; i < NUM_ELEMENTS; i++) {
  aos[i] = {
    a: (Math.random() * Number.MAX_SAFE_INTEGER) | 0,
    b: (Math.random() * Number.MAX_SAFE_INTEGER) | 0,
    c: (Math.random() * Number.MAX_SAFE_INTEGER) | 0
  };
}

let soa = {
  a: new Array(NUM_ELEMENTS),
  b: new Array(NUM_ELEMENTS),
  c: new Array(NUM_ELEMENTS)
};
for (let i = 0; i < NUM_ELEMENTS; i++) {
  soa.a[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
  soa.b[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
  soa.c[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
}

suite
  .add("typed array", function() {
    for (let i = 0; i < SIZE; i++) {
      typedArray[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
    }
  })
  .add("array", function() {
    for (let i = 0; i < SIZE; i++) {
      arrayNumbers[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
    }
  })
  .add("array of structure", function() {
    for (let i = 0; i < NUM_ELEMENTS; i++) {
      aos[i].a = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
      aos[i].b = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
      aos[i].c = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
    }
  })
  .add("structure of array", function() {
    for (let i = 0; i < NUM_ELEMENTS; i++) {
      soa.a[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
      soa.b[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
      soa.c[i] = (Math.random() * Number.MAX_SAFE_INTEGER) | 0;
    }
  })
  .on("cycle", function(event) {
    console.log(String(event.target));
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
