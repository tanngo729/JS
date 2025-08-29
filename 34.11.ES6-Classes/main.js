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

// Kháo báo ES6 classes
// 1. Class expression (ít dùng hơn)
const SinhVienEx = class {
  // thuộc tính
  // Phương thức
};

// 2. Class decoration(thường dùng vì nó ngắn gọn hơn)
class SinhVien {
  constructor(fullName, ID, birthYear, homeTown) {
    // thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // Các phương thức, khái báo trong thân calss, khai báo ngoài constructor, không cần function keyword
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Tạo đối tượng từ class
const stu3 = new SinhVien("Thomas Edison", 12345, 2003, "New York");
const stu4 = new SinhVien("no name", 2468, 2001, "Việt Nam");
console.log(stu3);
console.log(stu3.showInfo());

// 3. Thêm phương thức vào calss SinhVien thủ công (sau khi có class)
let currentYear = new Date().getFullYear();
console.log(stu3.calcAge(currentYear));
console.log(stu3);
console.log(stu4.calcAge(currentYear));
// 