// 29.7 startsWith() endsWith()
// 5.15 string.startsWith(searchValue, [startIndex]);
/**
Kiểm tra chuỗi string có bắt đầu bằng searchString không?
startIndex(tuỳ chọn): Vị trí bắt đầu tìm kiếm trong chuỗi.
Nếu không nhập, nó sẽ bắt đầu từ đầu chuỗi.
**/
let s30 = "abcdef abcdef";
console.log(s30.startsWith("a"));
console.log(s30.startsWith("ab"));
console.log(s30.startsWith("bc", 1));


// 5.16 String.endsWith(searchValue, [endIndex])
let s31 = "01234567890";
console.log(s31.endsWith("0"));
console.log(s31.endsWith("9", 10));

// ví dụ kiểm tra xem tên tệp âm thanh có kết thúc .mp3?
let tenTepTin = "nhac.mp4";
// kiểm tra xem tệp tin có kết thúc bằng ".mp3" hay không
if (tenTepTin.endsWith(".mp3")) {
  console.log("tệp tin là file âm thanh .mp3");
} else {
  console.log("tệp tin không phải là file âm thanh .mp3");
}