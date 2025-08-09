// 25.3 Arrow Function
// Function expression
let multiply = function (a, b) {
  return a * b;
};
// GỌi hàm
console.log(multiply(5, 6));
// arrow function (hàm mũi tên)
let multiplyArrow = (a, b) => a * b;
// GỌi hàm
console.log(multiplyArrow(5, 5));

// Tuy nhiên với trường hợp hàm phức tạp, cần thêm khối {}
// Function expression
let multiplyAndADD = function (a, b) {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
// Gọi hàm
console.log(multiplyAndADD(3, 5));

let multiplyandADDArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};
// Gọi hàm
console.log(multiplyandADDArrow(3, 5));
