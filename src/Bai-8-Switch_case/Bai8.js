console.log(`Bài 8 - switch case`);


const score = 2;
switch (true) {
  case (score >= 8 && score <= 10):
    console.log("Giỏi");
    break;
  case (score >= 7 && score < 8):
    console.log("Khá");
    break;
  case (score >= 5 && score < 7):
    console.log("Trung bình");
    break;
  case (score < 5 && score >= 0):
    console.log("Yếu");
    break;
  default:
    console.log(`sai`);
}