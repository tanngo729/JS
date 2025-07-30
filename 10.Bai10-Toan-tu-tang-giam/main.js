// 010. Toán tử tăng giảm: Toán tử tiền tố hậu tố(++, --)
// -Dùng để tăng hoặc giảm giá trị của biến một đơn vị
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++;//100
b--;//9
++c;//78
--d;//87

console.log(a, b, c, d);

// - Trường hợp biểu thức phức tập
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x);//2
console.log(y);//3
console.log(z);//-1