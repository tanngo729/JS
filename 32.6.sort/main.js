// Sort()
let M1 = ["b", "a", "c"];
console.log("b".charCodeAt());

for (let elements of M1) {
  console.log(`${elements} mã: ${elements.charCodeAt()}`)
}

let sortedM1 = M1.sort();
console.log(sortedM1);

// Phần tử có nhiều ký tự
let M2 = ["bbb", "bba", "bbc"];
let sortedM2 = M2.sort();
console.log(sortedM2);

let M3 = [1000, 1, 9];
let sortedM3 = M3.sort();
console.log(sortedM3);

// So sách với hàm so sánh Compare Function
/* 
Nếu compareFunction(a,b) trả về một giá trị < 0, a sẽ được đặt trước b
Nếu compareFunction(a,b) trả về 0, thứ tự giữa a và b không thay đổi
Nếu compareFunction(a,b) trả về một giá trị > 0, b sẽ được đặt trước a
*/
let M4 = [9, 3, 5, 4];
console.log(M4);
let sortedM4 = M4.sort((a, b) => a - b);
console.log(sortedM4)

let sortedM5 = M4.sort((a, b) => b - a);
console.log(sortedM5)