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
