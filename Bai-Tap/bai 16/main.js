// tìm x, y khi biết tổng và hiệu của chúng
// let x, y;
// let tong = Number(prompt("Nhập tổng 2 số: "));
// let hieu = Number(prompt("Nhập hiệu 2 số: "));

// x = (tong + hieu) / 2;
// y = x - hieu;
// console.log(`x của bạn = ${x} và y của bạn = ${y}`);


// viết chương trình nhập vào chiều cao, cân nặng, tính BMI và xuất ra thông báo
// let m = Number(prompt("Nhập chiều cao: (m)"));
// let kg = Number(prompt("Nhập cân nặng: (kg)"));

// let BMI = kg / (m ** 2);

// if (BMI < 15) {
//   console.log("Thân hình quá gầy");
// } else if (BMI >= 15 && BMI < 16) {
//   console.log("Thân hình gầy");
// } else if (BMI >= 16 && BMI < 18.5) {
//   console.log("Thân hình hơi gầy");
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log("Thân hình bình thường");
// } else if (BMI >= 25 && BMI < 30) {
//   console.log("Thân hình hơi béo");
// } else if (BMI >= 30 && BMI < 35) {
//   console.log("Thân hình béo");
// } else if (BMI >= 35) {
//   console.log("Thân hình quá béo");
// } else {
//   console.log("Bạn nhập lỗi");
// }


// Viết chương trình nhập vào 1 năm dương lịch, kiểm tra năm đó có phải năm nhuận hay không.

// let year = Number(prompt("Nhập năm: "));

// if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`Năm ${year} là năm nhuận`);
// } else {
//   console.log(`Năm ${year} là năm không nhuận`);
// }



// Viết chương trình nhập vào 1 tháng bất kì từ 1-12 => cho biết tháng đó có bao nhiêu ngày?

// let month = Number(prompt("Nhập tháng: "));

// if (month === 2) {
//   let year = Number(prompt("Nhập năm: "));

//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`tháng 2 của ${year} có 29 ngày`);
//   } else {
//     console.log(`tháng 2 của ${year} có 28 ngày`);
//   }
// } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//   console.log(`tháng ${month} có 31 ngày`);
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log(`tháng ${month} có 30 ngày`);
// } else {
//   console.log("Bạn nhập sai tháng");
// }



// Viết phương trình giả phương trình bậc 2: ax^2 +bx +c = 0

// let a = Number(prompt("Nhập a: "));
// let b = Number(prompt("Nhập b: "));
// let c = Number(prompt("Nhập c: "));

// let x1, x2;
// if (a === 0) {
//   // Phương trình trở thành bậc nhất: bx + c = 0
//   if (b === 0) {
//     if (c === 0) {
//       console.log("Phương trình vô số nghiệm");
//     } else {
//       console.log("Phương trình vô nghiệm");
//     }
//   } else {
//     let x = -c / b;
//     console.log(`Phương trình bậc nhất có nghiệm: x = ${x}`);
//   }
// } else {
//   // Phương trình bậc hai: ax² + bx + c = 0
//   let delta = b ** 2 - 4 * a * c;

//   if (delta < 0) {
//     console.log("Phương trình vô nghiệm");
//   } else if (delta === 0) {
//     let x = -b / (2 * a);
//     console.log(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);
//   } else {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
//   }
// }




// Viết chương trình nhập vào tháng trong năm, cho biết tháng đó thuộc quý mấy

// let thang = Number(prompt("Nhập tháng: "));

// if (thang === 1 || thang === 2 || thang === 3) {
//   console.log(`Tháng ${thang} thuộc Quý 1`);
// } else if (thang === 4 || thang === 5 || thang === 6) {
//   console.log(`Tháng ${thang} thuộc Quý 2`);
// } else if (thang === 7 || thang === 8 || thang === 9) {
//   console.log(`Tháng ${thang} thuộc Quý 3`);
// } else if (thang === 10 || thang === 11 || thang === 12) {
//   console.log(`Tháng ${thang} thuộc Quý 4`);
// } else {
//  console.log("Bạn nhập sai tháng");
// }