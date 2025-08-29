// 34.15- getter-setter
class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score;
  }
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }

  // Getter cho thuộc tính score
  get score() {
    return this._score;
  }

  // Setter cho thuộc tính score
  set score(value) {
    // Thêm các biểu thức logic để kiểm tra
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}

const Tan = new School("P021003", "Tân", "2003", 98);
console.log(Tan.id);
console.log(Tan.name);
console.log(Tan.birthYear);
console.log(Tan._score);
console.log(Tan.calcAge(2025));

// Sử dụng getter
console.log(Tan.score);
// Dùng setter
Tan.score = 75;
console.log(Tan.score);
