// 34.7 Tại sao bạn nên sử dụng 'const' thay vì 'let' cho đối tượng trong js
// Ôn tập
// 1. var cho phép tái định nghĩa, còn let thì không
let a = 5;
console.log(a);

a = 9;
console.log(a);
// const
const doSoi = 100;
// doSoi = 50;
console.log(doSoi);

// Khai báo đối tượng sử dụng let
let person = {
  name: "John",
  age: 30,
};
// THay đổi giá trị của person
person = 5;
console.log(person);
// khi sử dụng let, chỉ khởi tạo được 1 lần duy nhất, báo lỗi khi tái khai báo Nhưng chúng ta vẫn có thể gán giá trị cho nó. 
// Để tránh điều này xảy ra, thường sử dụng const để khai báo đối tượng
const person1 = {
  name: "John",
  age: 30,
};
// THay đổi giá trị của person
// person1 = 5;
console.log(person1);

// Và tất nhiên chúng ta vẫn thêm, sửa, xoá thuộc tính bình thường, chỉ là không ghi đè được lại đối tượng đã khái báo
person1.isAdmin = true;
person1.name = "Tom";
delete person1.age;
console.log(person1);