// Reduce

// Bài toán khi không dùng reduce()
let M1 = [1, 2, 3];
let sum = 0;
for (let element of M1) {
  sum += element;
}
console.log(sum);

// khi dùng reduce()
/*
accumulator: giá trị tích luỹ, được cập nhật sau mỗi lần gọi hàm.
currentValue: giá trị hiện tại đang xử lý trong mảng.
currentIndex(tuỳ chọn): Chỉ số của phần tử đang xử lý.
array(tuỳ chọn): mảng đang được reduce
*/

let sum2 = M1.reduce(
  // Tham số thứ 1: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  }, 0
  // Tham số thứ 2: initialValue (giá trị khởi tạo)
);
console.log(sum2);

let sum3 = M1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum3);