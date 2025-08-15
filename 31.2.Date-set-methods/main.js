// 31.2 Date set methods, định dạng và xuất thời gian
// 4. Set thời gian theo ý muốn
// Cách 1: new Date(year, monthIndex, day, hours,minutes, seconds, milliseconds)
let myDate1 = new Date(2025, 7, 15);
console.log(myDate1);
console.log(myDate1.toLocaleDateString());

// Cách 2: new Date(dateString)
let myDate2 = new Date("2025-08-15T08:39:22");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// Cách 3: sử dụng setfullyear, setmonth, setdate
let myDate3 = new Date();
myDate3.setFullYear(2023);
myDate3.setMonth(2);
myDate3.setDate(15);
console.log(myDate3);

// Sử dụng toLocalDateString
console.log(myDate3.toLocaleDateString());

// Định dạng Date time tự code
console.log(`
Ngày ${myDate3.getDate()}/${myDate3.getMonth() + 1}/${myDate3.getFullYear()}  
`);
// định dạng có số 0 nếu ngày tháng nhỏ hơn 10
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 10 ? "0" : "";
console.log(`
Ngày ${prefixDate}${myDate3.getDate()}/${prefixMonth}${myDate3.getMonth() + 1}/${myDate3.getFullYear()}  
`);