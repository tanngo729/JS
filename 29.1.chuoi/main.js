// 29.1 string js part 1: khái quát, index, length
// 1. các các xuất chuỗi
console.log("xin chào");
console.log('xin chào');
console.log(`xin chào`);

// 2. Khởi tạo chuỗi
let s1 = `Hồi đố tôi chê mồm em rộng
không tin hai đứa chập mồm đo`;

console.log(s1);

let s2 = "Hồi đố tôi chê mồm em rộng\nkhông tin hai đứa chập mồm đo";

console.log(s2);

// 3. quy tắc về index trong string 
let ten = "Linh";
console.log(ten[3]);

// 4. thuộc tính length: Kiểm tra chiều dài chuỗi
let s3 = `abcdef`;
// kiểm tra chiều dài chuỗi
console.log(s3.length);

// 4.2 ví dụ vận dụng:
// Nhập vào 1 tin nhắn, giới hạn ký tự nhập tối đa 140, nếu quá báo số ký tự vượt quá
let message = prompt("Mời nhập tin nhắn");
if (message.length <= 140) {
  alert(`Bạn đã nhập ${message.length} ký tự`);
} else {
  alert(`bạn đã nhập quá ${message.length - 140} ký tự`);
}