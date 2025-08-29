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
  // Phương thức được viết lại, để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2024 - this.birthYear
    return this.age;
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
// let inputKey = prompt("Mời nhập key: (address,scores)");
let inputKey = "address";
console.log("Truy xuất đến key dùng với tên biến inputKey");
console.log(student[inputKey]);
if (student[inputKey]) {
  console.log(student[inputKey]);
} else {
  console.log("inputKey bạn nhập không tồn tại");
}


// 3.1 Truy cập phương thức
console.log("Truy cập phương thức");
console.log(student.getAge());
console.log(student.diemTB());

// 3.2 Vấn đề: (Giả sử trong chương trình bạn cần gọi nhiều lần hàm getAge ---> Chương trình của bạn sẽ mất nhiều lần tính toán do hàm bị gọi đi gọi lại
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());
// console.log(student.getAge());

// Gọi phương thức getAge2
student.getAge2();
// Xuất thử tuổi thông qua thuộc tính age mới được thêm từ phương thức getAge2
console.log(student.age);

// #####34.4 #####
// 4. Thêm, xoá thuộc tính (thêm cặp key value)
student.email = "Tanngo729@gmail.com";
student["website"] = "http://tuhoc.cc";
// xuất đối tượng
console.log(student);
console.log(student.email);
console.log(student.website);

// Xoá thuộc tính 
delete student.email;
console.log(student);

// Sửa thuộc tinh
student.website = "Giá trị đã bị sửa"
console.log(student);