// 32.2 Array methods
// 1. concat() nối mảng
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
// let arr3 = [1, 2, 3];
let newArr = arr1.concat(arr2);
console.log(newArr);

// 2. push(): thêm một hoạc nhiều phần tử vào cuối mảng gốc
let arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);

// 3. unshift(): thêm một hoặc nhiều phần tử vào đầu mảng
let arr4 = [1, 2];
arr4.unshift(0, 1, "Nam");
console.log(arr4);

// 4. pop(): Loại bỏ phần tử cuối cùng của mảng(làm thay dổi mảng gốc) và trả về phần tử đã bị loại bỏ 
let arr5 = [1, 2, 3, "Nam"];
let removedElement = arr5.pop();
console.log(arr5);
console.log(removedElement);

// 5. shift(): Loại bỏ phần tử đầu của mảng(làm thay dổi mảng gốc) và trả về phần tử đã bị loại bỏ 
let arr6 = [1, 2, 3, "Nam"];
let removedElement1 = arr6.shift();
console.log(arr6);
console.log(removedElement1);

// 6. slice(): Tạo một bản sao của mảng
// Từ một vị trí bắt đầu đến một vị trí kết thúc
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4);
console.log(arr7);
console.log(sliceArr);

// 7.includes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay khônng
// Trả về true nếu có và false nếu không
let arr8 = [1, 2, 3, 4, 5, "Nam"];
let isPresent = arr8.includes(8);
console.log(isPresent);