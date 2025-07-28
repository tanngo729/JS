// 8. Ép kiểu dữ liệu:
// Xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("mời m nhập vào numberA: ");
console.log(typeof numberA);
// thử thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);
// cộng A với B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);
// kết quả là 85 -> là sai, js hiểu sẽ là cộng chuỗi
// Các phép tính khác
console.log(`A-B=%s`, numberA - numberB);
console.log(`A*B=%s`, numberA * numberB);
console.log(`A/B=%s`, numberA / numberB);
console.log(`A%B=%s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào dùng promt
let numberC = parseInt(prompt("Nhập C: "));
console.log(numberC);
console.log(typeof numberC);

// Hoặc đơn giản dùng hàm Number() để ép -> kiểu dữ liệu number
let numberD = Number(prompt("Nhập D: "));
console.log(numberD);
console.log(typeof numberD);