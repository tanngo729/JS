// Bài 24:
// let str = prompt("Nhập chuỗi: ");
// let thuong = 0, HOA = 0, so = 0, space = 0;
// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   if (char >= "a" && char <= "z") {
//     thuong++;
//   } else if (char >= "A" && char <= "Z") {
//     HOA++;
//   } else if (char >= "0" && char <= "9") {
//     so++;
//   } else if (char === " ") {
//     space++;
//   }
// }
// console.log(`Chuỗi có ${thuong} ký tự thường.`);
// console.log(`Chuỗi có ${HOA} ký tự HOA.`);
// console.log(`Chuỗi có ${so} ký tự số.`);
// console.log(`Chuỗi có ${space} ký tự khoảng trắng.`);


// Bài 25:
// function isValidPassword(password) {
//   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//   return regex.test(password);
// }

// let password;
// do {
//   password = prompt("Mời bạn thiết lập mật khẩu");
//   if (!isValidPassword(password)) {
//     alert("Mật khẩu chưa đúng yêu cầu mời bạn nhập lại: ");
//   }
// } while (!isValidPassword(password));

// alert(`Bạn đã thiết lập mật khẩu ${password} thành công`);

// let attempts = 0;
// let login;

// while (attempts < 5) {
//   login = prompt("Nhập mật khẩu đăng nhập:");

//   if (login === password) {
//     alert("Bạn đăng nhập thành công");
//     break; // Thoát vòng lặp khi đúng
//   } else {
//     attempts++;
//     alert(`Sai mật khẩu. Bạn còn ${5 - attempts} lần thử.`);
//   }
// }

// if (attempts === 5) {
//   alert("Bạn đã nhập sai 5 lần. Tài khoản bị khóa.");
// }


// Bài 26:
// function encryptMessage(message) {
//   const a = "abcdefghijklmnopqrstuvwxyz";
//   const b = "zxcvbnmasdfghjklqwertyuiop";
//   let result = "";
//   for (let i = 0; i < message.length; i++) {
//     let char = message[i].toLowerCase();
//     if (a.includes(char)) {
//       let index = a.indexOf(char);
//       result += b[index];
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// let mess = prompt("Nhập tin nhắn mã hoá");
// let kq = encryptMessage(mess);

// alert(`Tin nhắn được mã hoá: ${kq}`);


// Bài 27:
// const a = "tôi chăm học tôi chịu khó tôi đẹp trai";
// const targetWord = "tôi";
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a.slice(i, i + targetWord.length) === targetWord) {
//     count++;
//   }
// }

// alert(`Số lần xuất hiện từ ${targetWord} trong chuỗi là ${count}`);


// Bài 28:
// function separate(inputString) {
//   let letters = "";
//   let numbers = "";
//   for (let i = 0; i < inputString.length; i++) {
//     let char = inputString[i];
//     if (isNaN(char)) {
//       letters += char;
//     } else {
//       numbers += char;
//     }
//   }
//   return { letters, numbers };
// }

// let inputString = prompt('Mời bạn nhập chuỗi: ');
// let result = separate(inputString);

// alert(`
// chuỗi chữ: ${result.letters}
// chuỗi số: ${result.numbers}
// `);


