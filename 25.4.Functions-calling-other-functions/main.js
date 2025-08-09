// 25.4 functions calling other functions
// Hàm thực hiện phép tính cộng
function cong(a, b) {
  return a + b;
}

// Hàm thực hiện phép tính nhân
function nhan(x, y) {
  return x * y;
}

// Hmaf gọi các hàm khác để thực hiện phép tính tổng và nhân
function congNhan(num1, num2, num3) {
  let sum = cong(num1, num2);
  let product = nhan(sum, num3);
  return product;
}
let result = congNhan(2, 3, 4)
console.log(result);