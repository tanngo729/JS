// 29. Viết chương trình nhập vào năm sinh và in ra số tuổi
// let getAgeFromBirthYear = (birthYear) => {
//   const currentYear = new Date().getFullYear();
//   if (!Number.isInteger(birthYear)) return null;
//   if (birthYear < 0 || birthYear > currentYear) return null;
//   return currentYear - birthYear;
// };

// let age = null;

// while (age === null) {
//   let input = prompt("Nhập năm sinh của bạn");

//   // Nếu người dùng bấm Cancel thì thoát
//   if (input === null) {
//     alert("Bạn đã thoát chương trình.");
//     break;
//   }

//   const birthYear = Number(String(input).trim());
//   age = getAgeFromBirthYear(birthYear);

//   if (age === null) {
//     alert("Năm sinh không hợp lệ. Vui lòng nhập lại.");
//   } else {
//     alert(`Tuổi của bạn là: ${age}`);
//   }
// }


// let minutes = Number(prompt("Nhập thời gian: "));

// if (isNaN(minutes) && minutes <= 0) {
//   alert("Thời gian không hợp lệ");
// } else {
//   let timeleft = minutes * 60;
//   let timer = setInterval(() => {
//     let min = Math.floor(timeleft / 60);
//     let sec = timeleft % 60;

//     let display = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
//     console.log(`Còn lại: ${display}`);

//     timeleft--;
//     if (timeleft < 0) {
//       clearInterval(timer);
//       alert("Hết thời gian");
//     }
//   }, 1000);
// }


function timeSince(timestamp) {
  const now = new Date();
  console.log(now.getTime());
  const timeDifference = now - timestamp;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) return `${seconds} giây trước`;
  if (minutes < 60) return `${minutes} phút trước`;
  if (hours < 24) return `${hours} giờ trước`;
  if (days < 30) return `${days} ngày trước`;
  if (months < 12) return `${months} tháng trước`;
  return `${years} năm trước`;
}

// Ví dụ sử dụng
const timestamp = 1755247912291; // thời điểm bạn A offline
console.log(timeSince(timestamp));