// 20. Vòng lặp while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let n = prompt("Nhập vào số n (từ 1 đến 99): ");
console.log(n);

while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(
    prompt("Số của bạn nhập không hợp lệ. Vui lòng nhập lại (1 đến 99): ")
  );
}

alert("Bạn đã nhập n: " + n);