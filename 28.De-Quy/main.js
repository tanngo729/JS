// 28. Đệ quy
function giaithua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * giaithua(n - 1);
  }
}

let ketQua = giaithua(4);
console.log(ketQua);


// ví dụ 2: dãy fibonasi
function f(n) {
  if (n <= 2) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}

let ketQua2 = f(9);
console.log(ketQua2);