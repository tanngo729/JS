// Bài 15 viết chương tình nhập vào n, in ra kết quả n!
// let n = Number(prompt("Mời bạn nhập vào n: "));
// let GT = 1, i = 1;
// // for (let i = 1; i <= n; i++) {
// //   GT = GT * i;
// // }
// while (i <= n) {
//   GT = GT * i;
//   i++;
// }
// console.log(GT);

// let n = Number(prompt("Mời bạn nhập n: "));
// while (!Number.isInteger(n) || n < 0) {
//   n = Number(prompt("Số không hợp lệ, Mời bạn nhập lại: "));
// }

// let GT = 1;
// for (let i = 1; i <= n; i++) {
//   GT *= i;
// }
// console.log(n + "! = " + GT);






// Bài 16: Viết chương trình nhập số a từ bàn phím nếu a chẵn thì tính tổng số chẵn còn lẽ thì thoát chương trình
// let a = Number(prompt("Nhập a: "));

// while (!Number.isInteger(a)) {
//   a = Number(prompt("Nhập lại a: "));
// }
// if (a % 2 === 0) {
//   let tong = 0;
//   // while (i <= a) {
//   //   tong += i;
//   //   i += 2;
//   // }
//   // console.log(tong);
//   for (let i = 0; i <= a; i += 2) {
//     tong += i;
//   }
//   console.log(tong);
// } else {
//   console.log("Tôi không tính số lẽ hẹ hẹ");
// }

// Bài 17: viết chương trình tính tổng các số lẻ từ 1 đến n, n nhập từ bàn phím
// let n = Number(prompt("Nhập n: "));
// while (!Number.isInteger(n)) {
//   n = Number(prompt("Nhập lại n: "));
// }
// let tong = 0;
// for (let i = 1; i <= n; i += 2) {
//   if (i === 3) {
//     continue
//   }
//   tong += i;
// }
// console.log(tong);


// Bài 18: Viết chương trình tìm những số chia hết cho 3 từ 10 - 50
// let a = 50;
// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(`Những số chia hết cho 3 từ 10 đến 50 là: ${i}`);
//   }
// }


// Bài 19: Viết chương trình tính tổng S =1! 2!+3!+...+10!
// let GT = 1;
// let tong = 0;
// for (let i = 1; i <= 10; i++) {
//   GT *= i;
//   tong += GT;
// }
// console.log(tong);


// Bài 20: Số hoàn thiện
// for (let n = 1; n <= 1000; n++) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     if (n % i == 0) {
//       sum += i;
//     }
//   }
//   if (sum === n) {
//     console.log(n);
//   }
// }

// for (let n = 2; n <= 1000; n++) {
//   let sum = 1;
//   let sqrtN = Math.sqrt(n);

//   for (let i = 2; i <= sqrtN; i++) {
//     if (n % i == 0) {
//       sum += i;
//       let orther = n / i;
//       if (orther !== i && orther !== n) {
//         sum += orther;
//       }
//     }
//   }
//   if (sum === n) {
//     console.log(n);
//   }
// }


// Bài 21: viết chương trình nhập số nguyên a>0 từ bàn phím và cho biết đó có phải là số nguyên tố hay không

while (true) {
  let a = Number(prompt("Mời nhập vào số a (>0): "));
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Mời nhập lại số a (>0): "));
  }
  let isPrime = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(a + " là số nguyên tố")
  } else {
    alert(a + " kh là số nguyên tố")
  }

  let answer = prompt(`
    Bạn có muốn tiếp tục không?
    Nhập "no" để thoát
    Bấm phím bất kỳ để tiếp tục
  `);
  if (answer.toLowerCase === "no") {
    break;
  }
}


