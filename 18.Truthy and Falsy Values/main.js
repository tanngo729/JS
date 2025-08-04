// 8. Giá trị falsy khi chuyển đổi sang boolean sẽ là false 
// false, 0, -0, 0n, "", null, undefinded, NaN
let a = Boolean(null);
console.log(a);
console.log(typeof a);

let salary;
console.log(salary);
if (salary) {
  console.log("Salary is defined");
} else {
  console.log("Salary is undefined")
}