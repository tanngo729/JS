let student = {
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
    return 2024 - this.birthYear
  },
  diemTB: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  }
};
console.log(student);


let teacher = {
  "1 fullName": "Jacob",
  "@address": {
    city: "HCM",
    country: "Việt Nam"
  }
}
console.log(teacher);

// Kiểm tra kiểu loại
console.log(typeof student);
console.log(typeof teacher);

// ###############
// Truy cập thuộc tính: Dot notation . và Bracket notation []
// 1. Sử dụng dot (.) = Dot notation
console.log(student.fullName);
console.log(student.birthYear);
console.log(student.address);
console.log(student.scores);

// 2. Sử dụng ([]) = Braccket notation
/*
Bracket notation dùng khu key đặc biệt - có khoảng trắng, vi pham quy tắc đặt tên biến
 */
console.log(teacher["1 fullName"]);
console.log(teacher["@address"]);

// Linh động sử dụng [] với biến
let inputKey = prompt("Mời nhập key: (address,scores)");
console.log("Truy xuất đến key dùng với tên biến inputKey");
console.log(student[inputKey]);
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("inputKey bạn nhập không tồn tại");
}






