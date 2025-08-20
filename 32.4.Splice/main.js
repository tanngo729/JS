// 32.4 Splice 
/*
start: chỉ định vị trí bắt đầu thay đổi mảng. Nếu là một số âm, nó sẽ được tính từ cuối mảng.
deleteCount: số nguyên chỉ định sôs lượng phần tử sẽ bị loại bỏ từ mảng, bắt đầu từ vị trí start. Nếu item1, item2, ...: Các phần từ mới sẽ được thêm vào mảng từ vị trí start
*/

// Loại bỏ phần tử từ mảng
let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(2 2);
arr11.splice(-2, 2);
console.log(arr11);

// THay thế phần tử trong mảng
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 2, 6, 7);
console.log(arr12);

// THêm phần từ vào mảng
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(5, 0, 6, 7);
console.log(arr13);