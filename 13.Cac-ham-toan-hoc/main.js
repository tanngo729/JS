// 13. các hàm toán học thông dụng
// 1. Hàm `Math.sqrt()`
let a = Math.sqrt(4);
console.log(a);

// 2. Hàm `Math.pow(base, exponent)`
let b = Math.pow(2, 3);
console.log(b);

// 3. Hàm `Math.abs()`
let c = Math.abs(-5);
console.log(c);

// 4. Hàm `math.ceil()` và `Math.floor`
let d = Math.floor(4.63456);
console.log(d);

// 5. Hàm `Math.round()`, từ 0.5 làm tròn thành 1
let e = Math.round(4.59);
console.log(e);

// 6. Làm tron x chữ số phần đơn vị
let x = 3.123545;
let xRounded = x.toFixed(2);
console.log(`x sau khi làm tron: ${xRounded}`);
// Lưu ý toFixed sẽ trả về kết quả là string
console.log(`Kiểu dữ liệu của xRounded: ${typeof xRounded}`);
// muốn là số thì cần ép kiểu sang number
let xRounded2 = parseFloat(x.toFixed(2));
console.log(`Kiểu dữ liệu của xRounded2: ${typeof xRounded2}`);
console.log(`x sau khi làm tròn: ${xRounded2}`)

// 7. Hàm `Math.min()` và `Math.max()`
let num1 = 6,
  num2 = 7,
  num3 = 5;
let minvalue = Math.min(num1, num2, num3);
let maxvalue = Math.max(num1, num2, num3);
console.log(`Giá trị nhỏ nhất là: ${minvalue}, giá trị lớn nhát là: ${maxvalue}`);
