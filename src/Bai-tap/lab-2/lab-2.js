console.log(`Lab 2`);
// Tạo hàm tính trung bình cộng điểm số rồi xếp loại
const trungBinhCong = (toan, van, anh) => {
  return (toan + van + anh) / 3;
}

let diemTb = trungBinhCong(8.3, 7.2, 9.1);
console.log(`Điểm trung bình cộng: ${diemTb}`);

const xepLoai = (diemTb) => {
  if (diemTb >= 8 && diemTb <= 10) {
    return "Giỏi";
  } else if (diemTb >= 6.5 && diemTb < 8) {
    return "Khá";
  } else if (diemTb >= 5 && diemTb < 6.5) {
    return "Trung bình";
  } else if (diemTb >= 0 && diemTb < 5) {
    return "Yếu";
  } else {
    return "Điểm không hợp lệ";
  }
}
let loai = xepLoai(diemTb);
console.log(`Xếp loại: ${loai}`);

