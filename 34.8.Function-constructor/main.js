const student = {
  // key value
  // thuộc tính
  fullName: "Tran Nhu Nhong",
  birthYear: 2005,
  address: {
    city: "HCM",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  getAge: function () {
    return new Date().getFullYear() - this.birthYear;
  },
  diemTB: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  }
};

// 2. Function() constructor: Hàm tạo-sử dụng để tạo khuôn mẫu (prototype)
// Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
// Cách 1: function expression (ít dùng)
const Sinhvien = function (fullName, ID, birthYear, homeTown) {
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
// Cách 2: function declaration (thường dùng hơn)
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

// Truy cập thuộc tính và phương thức của đối tượng:
console.log(sv2.showInfo());
console.log(sv1["fullName"]);

// Sv1, và sv2 có thể gọi là các đối tượng cụ thể, hoặc gọi là các instance (thể hiện)
let abc = 5;
console.log("Kiểm chứng instance");
console.log(sv1 instanceof Student);
console.log(abc instanceof Student);