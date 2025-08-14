// 29.6 indexOf, lastIndexOf, includes
// 5.12 string.indexOf(searchValue, fromIndex);
// tìm kiếm (searchValue) trong chuỗi;
// Nếu giá trị tìm kiếm không được tìm thấy, phương thức trả về -1
/*
fromIndex(tuỳ chộn): vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ đầu chuỗi.
*/
let s25 = "abcdef abcdef";
let s26 = s25.indexOf("d");
console.log(s26);
// Tìm chữ "c" nhưng bắt đầu từ index 3
console.log(s25.indexOf("c", 3));
let notFoundIndex = s25.indexOf("g");
console.log(notFoundIndex);
// 5.13 string.lastIndexOf(searchValue, endIndex);
/* 
TÌm kiếm giá trị xuất hiện cuối cùng của chuỗi tìm kiếm (searchValue)
Nếu giá trị tìm kiếm không được tìm thấy trả về -1
endIndex (tuỳ chọn): Vị trí bắt đầu tìm kiếm trong chuỗi từ phải sang trái
Nếu không được cung cấp, tìm kiếm sẽ bắt đầu từ cuối chuỗi.
*/
let s27 = "abcdef abcdef";
let s28 = s27.lastIndexOf("a");
console.log(s28);
// TÌm với tham số endIndex
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));


// 5.14 String.includes(searchString[, fromIndex]); 
/* 
Kiểm tra chuỗi con
kiểm tra string có chứa cụm searchString hay không
fromIndex (tuỳ chọn): Vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không nhập, tìm kiếm toàn bộ chuỗi
*/
let s29 = "abcdef abcdef";
console.log(s29.includes("a"));
console.log(s29.includes("g"));
// tìm a bắt đầu từ vị trí index
console.log(s29.includes("a", 8));
