// 15. Hàm `Math.random()`
// 1. random trong (0 -> 1)
let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue}`);

// 2. random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2}`);

// 3. random số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên từ 0 đến 10 là: ${randomValue3}`);

// 4. random từ 0 cho đến sát 30

let randomValue4 = parseInt(Math.random() * 30);
console.log(`Số ngẫu nhiên từ 0 đến 30 là: ${randomValue4}`);

// 5. random trong khoảng mình muốn
let randomValue5 = parseInt(Math.random() * 30) + 1;// từ 1 đến 30
console.log(`Số ngẫu nhiên từ 1 đến 30 là: ${randomValue5}`);

