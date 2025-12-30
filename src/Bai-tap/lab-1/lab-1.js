const fullName = "Ngô Trường Tân";
const birthYear = 2003;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;

console.log(`Tên: ${fullName},
Tuổi: ${age}, 
Sinh viên: ${isStudent ? "Đúng" : "Sai"}`);