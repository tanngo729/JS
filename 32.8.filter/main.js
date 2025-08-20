let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(
  (value, index, array) => value % 2 === 0
);
console.log(evenNumbers);