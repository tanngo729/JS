// 29.8 string js part 8 -split()
// string.split(separator, limit)
/*
1. string: chuỗi gốc cần chia.
2. separator: chuỗi để xác định vị trí thực hiện tách.
3. limit(tuỳ chọn): giới hạn số lượng phần tử trong mảng kết thúc
*/
let student = "Hoa,Lan,Huệ,Trung";
let arr = student.split(",");
console.log(arr);
// giới hạn phần tử mảng
let arr2 = student.split(",", 3);
console.log(arr2);

// Nếu nhập vào "" thì sẽ tách ròi từng ký tự -> Mảng
let str = "abcdefgh 1234";
let arr3 = str.split("");
console.log(arr3);