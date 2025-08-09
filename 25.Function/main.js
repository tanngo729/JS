// 25.function (Hàm)
/* Bài toán tính tổng 2 số
a. 7, 5
b. 9, 6
c. 10, 5
*/

// a. 7, 5
let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// b. 9, 6
let c = 7;
let d = 5;
let tong1 = c + d;
console.log(tong1);

// 1. KHai báo function 
// Bước 1 khai báo
function tenFunction() {
  // Mã lệnh thực hiện một nhiệm vụ nào đó
}
// Bước 2 gọi hài khi cần sử dụng
tenFunction();

// 2. ví dụ đơn giản
function xinChao() {
  console.log("Chào mừng đến với bình nguyên vô tận");
}
xinChao();

// 3. function với tham số (parameters) 
// let inputName = prompt("Mời nhập vào tên của bạn");
function xinChao2(name) {
  console.log(`Chào mừng ${name} đến với nhà này`);
}

// xinChao2(inputName);
xinChao2("Trần Như Nhộng");


// ví dụ 2 về parameters
function tinhTong(a, b) {
  // let ketQua = a + b;
  // return ketQua;
  return a + b;
}

console.log(tinhTong(5, 7));
// Gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 9;
let diemVan = 7.8;
let tongDiem = tinhTong(diemToan, diemVan);
console.log(tongDiem);
let dtb = tongDiem / 2;
console.log(dtb);


// Chú ý:
// Thân hàm nếu không có return thì giá trị trả về là undefined 
// 5. truyền giá trị mặc định cho parameters 
console.log(tinhTong(10));
function tinhTong2(a = 0, b = 0) {
  // let ketQua = a + b;
  // return ketQua;
  return a + b;
}
console.log(tinhTong2(5));

