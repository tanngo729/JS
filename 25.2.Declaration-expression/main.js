// 25.2 TÌm hiểu thêm về các cách khai báo hàm
// 2.1 function declaration()
// Function declaration
function tenFunction(parameters) {
  // Thân hàm
  // return somthing;
}
// Khai báo hàm
function tong(a = 0, b = 0) {
  return a + b;
}
// Gọi hàm
console.log(tong(3, 5));

// 2.2 Function expresstion
// Funciton expresstion
let ten_bien = function (parameters) {
  // Thân hàm
  // return something;
};
// KHái báo 
let tich = function (a = 1, b = 1) {
  return a * b;
};
console.log(tich(6, 7));