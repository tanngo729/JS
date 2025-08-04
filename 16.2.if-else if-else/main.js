// 16.2 if else if - else
let dtb = Number(prompt("mời bạn nhập điểm: "));

if (dtb <= 10 && dtb >= 8) {
  console.log("Học sinh giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
  console.log("Học sinh khá");
} else if (dtb < 6.5 && dtb >= 5) {
  console.log("Học sinh tb");
} else if (dtb >= 0 && dtb < 5) {
  console.log("Học sinh yếu")
} else {
  console.log("bạn nhập tào lào");
}