// 17. Toán tử 3 ngôi 
// let num = 10;
// let message = num >= 0 ? "số dương" : "sô âm";
// console.log(message);

// let num2 = 12;
// let message2 = num2 % 2 === 0 ? "số chẵn" : "số lẻ";
// console.log(message2);



// Viết chương trình nhập vào điểm trung bình, và xuất ra kết quả xếp loại học sinh
let dtb = Number(prompt("Nhập điểm trung bình: "));

let message = dtb >= 8 ? "giỏi" : (dtb >= 6.5 ? "Khá" : dtb >= 4.5 ? "trung bình" : "Kém");
console.log(message);