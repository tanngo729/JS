console.log(`Bài 7`);


// if/if-else/else if/else

const age = 15;
// if (age > 18) {
//   console.log(`enjoy your video`);
// }
// if (age < 18) {
//   console.log(`you can't watch this video`);
// }

if (age > 18) {
  console.log(`enjoy your video`);
} else {
  console.log(`you can't watch this video`);
}


// score => A, B, C, D, F. Giỏi, Khá, Trung bình, Yếu, Kém
const score = 10;
if (score >= 8.5) {
  console.log(`Giỏi [A]`);
} else if (score >= 7) {
  console.log(`Khá [B]`);
} else if (score >= 5.5) {
  console.log(`Trung bình [C]`);
} else if (score >= 4) {
  console.log(`Yếu [D]`);
} else {
  console.log(`Kém [F]`);
}