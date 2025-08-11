// 29.2 Cắt chuỗi con trong js - slice và substring
// 5.1 slice cắt chuỗi
let s4 = "0123456789";
// Cắt chuỗi
let s5 = s4.slice(2, s4.length);// cắt từ index 2 đến 5-1 =4
console.log(s5);
// endIndex: nếu không nhập sẽ ngầm định là cắt đến cuối chuỗi
// có thẻ hiểu ngầm định, thì endIndex = s4.length
console.log(s4.length);

// ví dụ: chỉ cho phép tin nhắn dài 20 ký tự
// nếu quá thì tự cắt xuất chuỗi sau xử lý
/*let s6 = prompt("Mời nhập vào chuỗi");
console.log(`Bạn đã nhập ${s6.length} ký tự`);
if (s6.length > 20) {
  console.log(`Bạn đã nhập quá ${s6.length - 20} ký tự`);
  let s7 = s6.slice(0, 20);
  console.log("Chuỗi sau xử lý: " + s7);
}

// code online
console.log("Chuỗi sau xử lý là " + prompt("Mời nhập vào chuỗi 2: ").slice(0, 20));*/

// 5.2 substring 
let s8 = "0123456789";
// Cắt chuỗi
let s9 = s4.substring(2, 4);
console.log(s9);

// So sánh slice() và substring()
/* 

*/
let s10 = "0123456789";
console.log("Sử dụng substring");
console.log(s10.substring(1, 4)); //123
console.log(s10.substring(4, 1));//123
console.log("Sử dụng slice");
console.log(s10.slice(1, 4));//123
console.log(s10.slice(4, 1));//""

/* Khác nhau khi xử lỹ với số âm
substring(start, end):
substring sẽ chuyển số âm thành 0 và nếu end < start sau khi chuyển số âm thì nó sẽ đảo ngược chúng
*/
let s11 = "0123456789";
console.log("sử dụng substring với tham số âm");
console.log(s11.substring(-3, -1));
// s11.substirng(-3,-1) -> s11.substring(0,0) -> ""
// TH2: substring nếu end < start đảo ngược vị trí start và end
console.log("trường hợp substring có 1 tham số âm, end < start");
console.log(s11.substring(4, -5));
// s11.substring(4,-5) --> s11.substring(4, 0) -->s11.substring(0,4)

console.log("sử dụng slice với tham số âm");
// console.log(s11.slice(-3,-1));  cắt từ -3 đến -2
// 78 do: lấy từ index -3 dến sát -1 (tức là -2)