// 29.5 replace (oldValue, newValue) repeat(count) in Js 
// 5.8 string.replace(oldValuem newValue)
let s14 = "học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));
console.log(s14.replace(/học/g, "ngủ"));
// Để thay thế tất cả dùng biểu thức chính quy (regular expression)

// String.repeat(count);
// count: số lần lặp lại chuỗi.
let s23 = "Hello, ";
let s24 = s23.repeat(3);
console.log(s24);
