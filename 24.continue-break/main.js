// 24. coutinue, break
// let n = 0;
// while (n < 100) {
//   n++;
//   console.log(n);
// }

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}