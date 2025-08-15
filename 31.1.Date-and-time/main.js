// 31.1 date time in js 
// 1. Tạo đối tượng date: sử dụng new Date() để tạo đối tượng date
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDay();
const hours = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

console.log("Năm hiện tại: " + year);
console.log("tháng hiện tại: " + month);
console.log("ngày hiện tại: " + day);
console.log("giờ hiện tại: " + hours);
console.log("phút hiện tại: " + minute);
console.log("giây hiện tại: " + second);

// 3. timestamp là gì
let timestamp1 = new Date(1755192808479);
console.log(timestamp1);
const currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);