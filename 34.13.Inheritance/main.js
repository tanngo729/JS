// 34.13 - JS inheritance es6
// Định nghĩa lớp cơ sở School
class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  // Phương thức cảu lớp school
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

// Lớp Student kế thừa từ lớp School
class Student extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear);
    this.major = major;
  }

  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}

// Tạo đối tượng của lớp school 
const p1 = new School("P2003001", "Jacky", 2003);
// Truy cập thuộc tính và phương thức của class School
console.log(p1.id);
console.log(p1.birthYear);
console.log(p1.calcAge(new Date().getFullYear()));

// Tạo đối tượng của sub class Student
const s1 = new Student("P2003002", "Ngô Trường Tân", 2003, "Computer Sience");
// Truy cập thuộc tính và phương thức của class Student
console.log(s1.id);
console.log(s1.birthYear);
console.log(s1.name);
console.log(s1.calcAge(new Date().getFullYear()));
console.log(s1.major);
s1.study();
console.log(s1);