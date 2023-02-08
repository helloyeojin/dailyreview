// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }
// 짝수 찍기

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }
// 홀수 찍기

// for (let i = 20; i >= 1; i--) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }
//홀수 찍기(역순)

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
// 홀수 찍기 간단한 버전

// for (let i = 20; i >= 1; i -= 2) {
//   console.log(i);
// }
// 역순으로 짝수 정렬

// var n = 10;
// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) continue;
//   sum += i;

//   console.log(i + "-----" + sum);
// }

var result = "";
console.log(typeof result);
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) result += i;
}
console.log(typeof result);
