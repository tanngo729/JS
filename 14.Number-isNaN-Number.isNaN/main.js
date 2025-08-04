// 14. Hàm isNaN, Number
// 8.Hàm Number(value) --> Chuyển value sang số
// --> Nếu không chuyển được trả về NaN
let str = "123a";
console.log(typeof str);
let number = Number(str);
console.log(number);
console.log(typeof number);

// let so = Number(prompt(`Mời nhập vào một số: `));
// console.log(so);

let a = "abc";
console.log(isNaN(a));


// Number.isNaN 

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "abc"));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(null));
