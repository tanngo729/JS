// 31.3 setTimout in js
// let helloArrow = () => {
//   console.log("Hello");
// }
// // helloArrow();
// setTimeout(helloArrow, 3000);

// function xinChao() {
//   console.log("Hello in function declaration");
// }
// setTimeout(xinChao, 3000);

// let helloExpression = function () {
//   console.log("Hello in function expression");
// };
// setTimeout(helloExpression, 3000);

// Truyền trực tiếp vào setTimeout
// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// setTimeout(function xinChao() {
//   console.log("Hello in function declaration");
// }, 3000);

// setTimeout(function () {
//   console.log("Hello in function expression");
// }, 3000);


// 3. Sử dụng với tham số 
let helloArrow2 = (yourName) => {
  console.log("Hello" + yourName);
}
setTimeout(helloArrow2, 3000, " Nam");

// 4. huỷ quá tình thực hiện hàm 
let timeOut = setTimeout(helloArrow2, 3000, " Giang");
clearTimeout(timeOut);