// 32.1 Mảng trong JS
let arr1 = [];
console.log(arr1);
let arr2 = [1, 2, 3, 4, "nam", true, [2, 3, 4]];
console.log(arr2);

// Sử dụng Array và constructor
let arr3 = new Array();
console.log(arr3);
// Tạo một mảng có sẵn các phần tử bên trong
let arr4 = new Array(1, 2, 3, 4, "nam", true, [2, 3, 4]);
console.log(arr4);
// Tạo mảng với độ dìa xác định, các phần tử là undefined
let arrayWithLength = new Array(5);
console.log(arrayWithLength);
console.log(arrayWithLength[0]);
// Truy xuất phần tử của mảng qua vị trí index
let arr5 = [4, 5, 7, 9];
console.log(arr5[2]);
console.log(arr5[3]);
// thuộc tính length: trả về số phần tử của mảng (chiều dài mảng bắt đầu từ 1)
console.log(arr5.length);
// Gán, thay đổi giá trị cho mảng qua index
let arr6 = [5, 6, 7];
arr6[1] = 10;
console.log(arr6);

// Duyệt mảng
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
console.log(arr7);
// for..of: chỉ có thẻ xem, không sửa được giá trị của mảng
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
  console.log(element);
  element = 5;
}
console.log(arr8);