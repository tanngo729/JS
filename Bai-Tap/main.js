/*
1️⃣ Biến (variables)
- Khai báo biến:
  + var: phạm vi function, có hoisting, có thể khai báo lại.
  + let: phạm vi block {}, không hoisting, không khai báo lại trong cùng scope.
  + const: giống let nhưng không thể gán lại giá trị (đối với object/array thì có thể thay đổi thuộc tính"property)

  let name = "Neo";
  const PI = 3.14;
  var age = 25;
*/


/*
2️⃣ Quy tắc đặt tên biến
- Không bắt đầu bằng số.
- không dùng ký tự đặc biệt(ngoại trừ _ và $)
- không sử dụng từ khoá js(if, for, class, ....)
- Nên sử dụng camelCase cho biến, PascalCase cho class, UPPER_CASE cho hằng số.
++ ví dụ hợp lệ:
  let firstName;
  let totalAmount;
  const MAX_SPEED = 120;
++ ví dụ sai:
  let 1name;
  let class;
*/


/*
3️⃣ Primitive Data Types

Có 7 loại kiểu dữ liệu nguyên thuỷ:
+ String
+ Number
+ undefinded
+ boolean
+ null
+ symbol
+ bigint

++ ví dụ:
    let text = "Hello";         // string
    let age = 30;               // number
    let isOnline = true;        // boolean
    let value;                  // undefined
    let empty = null;           // null
    let id = Symbol("id");      // symbol
    let bigNum = 9007199254740991n; // bigint
*/


/*
4️⃣ Xuất dữ liệu với biến
- console.log() -> in ra console
- alert() -> popup trên trình duyệt
- document.write() -> ghi trực tiếp vào HTML
- prompt() -> lấy input từ người dùng nhập vào

++ ví dụ:
  let name = "Neo";
  console.log("Hello", name);
  alert(`Xin chào ${name}`);
*/


/*
5️⃣ Các phép toán
- Toán học: + - * / % **

++ ví dụ:
  let sum = 5 + 3;       // 8
  let div = 10 / 2;      // 5
  let mod = 10 % 3;      // 1
  let pow = 2 ** 3;      // 8
*/


/*
6️⃣ Ép kiểu dữ liệu
- String(): ép sang chuỗi
- Number(): ép sang số
- Boolean(): ép sang true/false

++ ví dụ:
let a = "5";
console.log(Number(a) + 2); // 7

let b = 0;
console.log(Boolean(b)); // false

-truthy và falsy
+ falsy: 0, "", null, undefined, NaN, false
+ Truthy: tất cả giá trị còn lại
*/


/*
7️⃣ Toán tử gán
- =, +=, -=, *=, /=, %=, **=

++ ví dụ:
  let x = 5;
  x += 3;  // 8
  x *= 2;  // 16
*/


/*
8️⃣ Toán tử tăng giảm
- ++ và --
+ Tiền tố(++x): tăng rồi trả giá trị mới
+ Hậu tố (x++): trả giá trị cũ rồi tăng

++ ví dụ:
  let y = 5;
  console.log(++y); // 6
  console.log(y++); // 6 (y = 7 sau đó)
*/



/* 
9️⃣ Toán tử logic
- && (AND): tất cả điều kiện true -> true
- || (OR): chỉ cần 1 điều kiện true -> true
- ! (NOT): phủ định, đảo giá trị boolean

++ví dụ:
  console.log(true && false); // false
  console.log(true || false); // true
  console.log(!true);         // false
*/


/*
🔟 Toán tử so sánh
- == so sánh giá trị (có ép kiểu)
- === so sánh giá trị & kiểu dữ liệu (nên dùng)
- != và !== tương tự cho so sánh khác
- > < >= <=

++ ví dụ:
  console.log(5 == "5");  // true
  console.log(5 === "5"); // false
  console.log(5 !== 3);   // true
*/


/* 
1️⃣1️⃣ Các hàm toán học (Math)

console.log(Math.abs(-5));     // 5 - trị tuyệt đối
console.log(Math.ceil(4.3));   // 5 - làm tròn lên
console.log(Math.floor(4.9));  // 4 - làm tròn xuống
console.log(Math.round(4.5));  // 5 - làm tròn theo 0.5 nếu nhỏ hơn thì giảm còn lớn hơn thì tăng
console.log(Math.sqrt(16));    // 4 - căn bậc 2
console.log(Math.pow(2, 3));   // 8 - Mũ
console.log(Math.max(1, 5));   // 5 - lớn nhất
console.log(Math.min(1, 5));   // 1 - nhỏ nhất
*/


/* 
1️⃣2️⃣ Number.isNaN() vs isNaN()
- isNaN() ép kiểu rồi kiểm tra -> dễ gây sai
- Number.isNaN() chỉ trả true nếu giá trị thật sự là NaN
*/


/* 
1️⃣3️⃣ Math.random()
- trả số ngẫu nhiên từ 0 đến < 1
- thường dùng kết hợp Math.floor() dể lấy số nguyên trong khoảng

console.log(Math.random()); // 0.xxx

// Random từ 0 → 9
console.log(Math.floor(Math.random() * 10));

// Random từ min → max
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(1, 100));
*/
