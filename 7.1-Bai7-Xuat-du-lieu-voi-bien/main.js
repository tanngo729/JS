// 7. Các cách xuất dữ liệu với biến trong js
let soA = 25;
let soB = 5;

// Cách 1:
console.log("Căn bậc hai của " + soA + " là: " + soB);

// Cách 2:
console.log("Căn bậc hai của", soA, "là:", soB);

// Cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

// Cách 4:
console.log(`Căn bậc hai của %s là: %s`, soA, soB);

// Bài tập:
let a = 4, b = 3, kq = a * b;
console.log("Kết quả: " + a + " nhân với 3 bằng " + kq);
console.log("Kết quả:", a, "nhân với", b, "bằng", kq);
console.log(`Kết quả: ${a} nhân với ${b} bằng ${kq}`);
console.log(`Kết quả: %s nhân với %s bằng %s`, a, b, kq);