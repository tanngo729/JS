// Bài tập 22: sử dụng function viết chương trình nhập vào số nguyên n, và in ra kết quả n!
// function giaiThua(n) {
//   let GT = 1;
//   for (let i = 1; i <= n; i++) {
//     GT *= i;
//   }
//   return GT;
// }
// let n = Number(prompt("Nhập n: "));
// while (!Number.isInteger(n) || n < 0) {
//   n = Number(prompt("Số không hợp lệ, Nhập lại n: "));
// }

// let result = giaiThua(n);
// console.log(`${n}! = ${result}`);

// Bài 23: sử dụng function viết chương trình giải phương trình bậc 2: ax^2+bx+c = 0
// let a = Number(prompt("Nhập a: "));
// let b = Number(prompt("Nhập b: "));
// let c = Number(prompt("Nhập c: "));

// function PT2(a, b, c) {
//   if (a === 0) {
//     if (b === 0) {
//       return c === 0 ? "Phương trình vô số nghiệm" : "Phương trình vô nghiệm";
//     } else {
//       let x = -c / b;
//       return `Phương trình bậc nhất có nghiệm: x = ${x}`;
//     }
//   } else {
//     let delta = b ** 2 - 4 * a * c;
//     if (delta < 0) {
//       return "Phương trình vô nghiệm";
//     } else if (delta === 0) {
//       let x = -b / (2 * a);
//       return `Phương trình có nghiệm kép: x1 = x2 = ${x}`;
//     } else {
//       let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//       let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//       return `Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
//     }
//   }
// }

// let result = PT2(a, b, c);
// console.log(`Kết quả của phương trình: ${result}`);
