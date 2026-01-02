console.log(`Bài 13 - Phạm vi scope`);

let globalVar = "Tôi là biến toàn cục";
function demoScope() {
  console.log(globalVar);
}
demoScope();
console.log(globalVar);

function sayHi() {
  let localVar = "Tôi là biến cục bộ";
  console.log(localVar);

  if (true) {
    let blockVar = "Tôi là biến trong khối if";
    console.log(blockVar);
  }
  console.log(blockVar);
}

sayHi();
// console.log(localVar); // Lỗi: localVar is not defined