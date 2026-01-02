console.log(`Bài 10 - Countinue and Break`);


// for (let i = 1; i < 10; i++) {
//   console.log(`i = ${i}`);
//   if (i === 5) {
//     break;
//   }
// }

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue; // bỏ qua lần lặp này
  }
  console.log(`i = ${i}`);
}