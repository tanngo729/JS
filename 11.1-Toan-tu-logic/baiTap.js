// let pi = Math.PI;
// let r = parseFloat(prompt("Nhập bán kình"));

// let c = 2 * pi * r;

// let s = pi * r * r;
// console.log(`Chu vi = ${c} cm`);
// console.log(`Diện tích = ${s} cm2`);

// let a = parseFloat(prompt("nhập a: "));
// let b = parseFloat(prompt("nhập b: "));

// let s = a * b;
// let p = (a + b) * 2;
// console.log(`Diện tích = ${s} cm2`);
// console.log(`Chu vi = ${p} cm`);

let toan = parseFloat(prompt("nhập điểm toán: "));
let van = parseFloat(prompt("nhập điểm văn: "));
let anh = parseFloat(prompt("nhập điểm anh: "));

let dtb = (toan + van + anh) / 3;
dtb = dtb.toFixed(2);
console.log(`Điểm trung bình là: ${dtb}`);
