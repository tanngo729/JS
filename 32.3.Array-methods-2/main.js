// 32.3 array methods
// 8. indexOf() - trả về vị trí index của phần tử xuất hiện lần đầu tiên trong mảng, Trả về -1 nếu không tìm thấy
let arr9 = [1, 2, 3, 4, 5, 2, 6, 7];
let indexElement = arr9.indexOf(20);
console.log(indexElement);

// 9.lastIndexOf() - trả về vị trí index của phần tử xuất hiện lần cuối cùng trong mảng, Trả về -1 nếu không tìm thấy
let arr10 = [1, 2, 3, 4, 5, 2, 6, 7];
let indexElement2 = arr10.lastIndexOf(20);
console.log(indexElement2);

// 10. reverse(): đảo ngược thứ tự của các phần tử trong mảng gốc. NÓ thay đổi mảng gốc và không tạo ra mảng mới.
let arr11 = [1, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);
// Nếu m muốn giữ nguyên mảng gốc và tạo 1 bản sao reverse thì dùng slice dể tạo bản sao và dùng reverse dể đảo vị trí.
let arr12 = [1, 2, 3, 4, 5, 2, 6, 7];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

// 11.join():
// array.join(separator); Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách separator.
// separator: Nếu bỏ trôngs sẽ mặc định là dấu ,
// Phương thức này không thay đổi mảng gốc.

//
let arr14 = ["Nam", "Trung", 1, 2, 3];
let arr15 = arr14.join(" ");
console.log(arr14);
console.log(arr15);