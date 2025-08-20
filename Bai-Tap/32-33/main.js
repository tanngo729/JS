function createRandomArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 10) + 1;
    arr.push(num);
  }
  return arr;
}
let n = Number(prompt("Nhập số phần tử n: "));
while (n <= 0 || isNaN(n)) {
  n = Number(prompt("Nhập lại số phần tử n: "));
}

let randomArray = createRandomArray(n);
console.log(randomArray);
console.log("Mảng: " + randomArray.join(", "));
let reverseArray = randomArray.slice().reverse();
console.log("Mảng đảo: " + reverseArray.join(", "));
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
let sortedArray = sortArray([...randomArray]);
console.log("Mảng sau khi sắp xếp: " + sortedArray.join(", "));
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
let sumElement = sum(randomArray);
console.log("Tổng: " + sumElement);
let searchNum = Number(prompt("Nhập số để kiểm tra: "));
let indexArr = [];
for (let i = 0; i < randomArray.length; i++) {
  if (searchNum === randomArray[i]) {
    indexArr.push(i);
  }
}

if (indexArr.length === 0) {
  console.log(`Không có số ${searchNum} trong mảng`);
} else {
  console.log(`Số ${searchNum} xuất hiện tại vị trí index: ` + indexArr.join(", "));
}