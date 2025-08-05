// 19. switch case js
// let num = "abc";
// switch (num % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("Số lẽ");
//     break;
//   default:
//     console.log("Không phải số");
// }


// let month = parseInt(prompt("Nhập vào 1 tháng (1-12):"));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Tháng có 31 ngày");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Tháng có 30 ngày");
//     break;
//   case 2:
//     console.log("Tháng có 28 hoặc 29 ngày");
//     break
//   default:
//     console.log("Bạn nhập sai");
//     break;
// }


let Choise = Number(prompt(`
Chọn cách tìm kiếm của bạn:
1. Tìm theo tên
2. Tìm theo tác giả
3. Tìm theo nhà xuất bản
4. Tìm theo tiêu đề  
`));

switch (Choise) {
  case 1:
    alert("tác phẩm ...");
    break;
  case 2:
    alert("Tác giả ....");
    break;
  case 3:
    alert("Nhà xuất bản ...");
    break;
  case 4:
    alert("Chủ đề ...");
    break;
  default:
    alert("chọn không hợp lệ thoát chương trình");
    break;
}