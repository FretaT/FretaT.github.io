var arrays = require("./arrays");
var objects = require("./objects");

console.log(arrays.findEvenOdd([1, 2, 3, 4, 5, 6, 8]));

console.log(arrays.sum([1, 2, 3, 4, 5, 8, 10]));

console.log(arrays.findUniqueNumbers([1, 2, 3, 4, 5, 5, 4]));

console.log(arrays.printTypeNumbers([1, "test", true, 5]));

console.log(arrays.destructeArray([1, "test", true, { a: 3 }]));

console.log(arrays.findFirstOddIndex([2, 8, 3, 4, 5, 5, 4]));

console.log(arrays.convertArrayToString([2, "test", 3, 4]));

console.log(arrays.convertStringToArray("Convert String To Array"));

/********************************************************/

console.log(
  objects.convertObjectToArray({
    a: 1,
    b: [1, 2],
    c: "string",
    d: { x: 1, y: 2 },
  })
);

console.log(
  objects.getObjectsByKey([
    { a: 1, b: 2 },
    { a: 2, b: 4 },
  ])
);

console.log(
  objects.findOldestPerson([
    { name: "Rafi", age: 20 },
    { name: "Siku", age: 15 },
  ])
);

console.log(
  objects.findYoungestPerson([
    { name: "Rafi", age: 20 },
    { name: "Siku", age: 15 },
  ])
);

console.log(
  objects.filterPersons([
    { name: "Rafi", age: 20 },
    { name: "Siku", age: 15 },
  ])
);
