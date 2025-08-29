// 34.5 Một số phương thức sẵn có trong JS 
// 1. Object.keys(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng
let person = { name: "John", age: 30 };
let keys = Object.keys(person);
console.log(keys);

// 2. Object.values(obj); 
// Phương thức này trả về một mảng chưa tất cả các giá trị của đối tượng.
let person2 = { name: "John", age: 30 };
let values = Object.values(person2);
console.log(values);

// 3. Object.entries(obj);
// Phương thức này trả về một mảng chứa các cặp [Khoá, giá trị] của đối tượng dưới dạng mảng con
let person3 = { name: "John", age: 30 };
let entries = Object.entries(person3);
console.log(entries);

// 4. Object.assign(target, source1, source2);
// Sử dụng để sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn (source) vào một đối tượng đích(target).
let target = { c: 100 };
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target);

const target2 = { ...source1, ...source2 };
console.log(target2);

// 5. Object.hasOwnPrpperty(prop)
// Phương thức này kiểm tra xem đối tượng có một thuộc tính nào đó hay không và trả về true nếu có 
let person4 = { name: "John", age: 30 };

console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("job"));

// 6. Object.freeze(obj) 
// Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, xoá , sửa
let person5 = { name: "John", age: 30 };
Object.freeze(person5);
// Sửa
person5.age = 1000;
// Thêm
person5.email = "Tanngo729@gmail.com";
// Xoá
delete person5.age;
console.log(person5);

// 7. Object.seal(obj) 
// Phương thức này không cho thêm và xoá chỉ cho phép sửa giá trị
let person6 = { name: "John", age: 30 };
Object.seal(person6);
// thêm
person6.location = "New york";
// xoá
delete person6.age;
// sửa
person6.name = "Tan";
console.log(person6);
