// 34.9- Prototype trong JS
// Mảng thực chất có kiểu dữ liệu là object
// Khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

// Rõ ràng mảng M rỗng,
// Nhưng vì kế thừa các phương thức và thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính và phương thức từ nguyên mẫu cha mẹ
console.log(M.length);
M.push(5);
console.log(M);


// Đối tượng student
function Student(fullName, ID, birthYear, homeTown) {
  // Thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức 
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }
};

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Ngô Trường Tân", "2025003", 2003, "Gia Lai");
const sv2 = new Student("Ngô Văn B", "2025004", 2003, "Bình Dương");

console.log(sv1);

// 4. Xem nguyên mẫu- cha mẹ của đối tượng sv1
console.log("Xem nguyên mẫu - cha mẹ");
// object.getPrototypeOf(đối tượng)
// console.log(sv1.__proto__); //thuộc tính cũ, không dùng nữa
console.log(Object.getPrototypeOf(sv1));
console.log(Student.prototype);
// check
console.log(Student.prototype === Object.getPrototypeOf(sv1));
console.log(Student.prototype.isPrototypeOf(sv1));

// 5. Thêm phương thức vào Student.prototype
Student.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
}

console.log(sv1);
sv1.calcAge();
sv2.calcAge();

// 6. Thêm thuộc tính vào student.prototype
Student.prototype.email = "noemail@gmail.com";
console.log(sv1.email);
console.log(sv2.email);

// Thực vậy, nếu kiểm tra sv1 có trực tiếp chứa thuộc tính email
console.log(sv1.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));