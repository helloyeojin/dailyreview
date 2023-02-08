/*
// 이거는 한 줄 주석
/* 이거는 
여
러
줄
주석 */

/*document.write("<h1>밤빵보고싶어요</h1>");
// 그냥 메시지만 쓰는게 아니라 서식도 지정해줄 수 있음 ex)h1
document.write("밤빵최고" + "진짜" + "최고");
// 이렇게 +를 사용하면 문자열을 붙여서 써줄 수 있고
// 큰따옴표를 쓰면 안의 것을 문자열로 인식합니다

console.log("Hello World!");
// 인터프리터 언어라서 한 줄이 오류가 나면 다음 코드는 실행하지 않는대요
// 이 오류가 어디서 났는지 위치도 알려준다고 합니다

// alert("둔둔한 고양이가 나타났다!");
// 알려주고만 싶으면 alert
// 확인까지 누르게 하고 싶으면 confirm

/*var reply = confirm("고양이 귀여워");

var reply = prompt("최고의 고양이 밤빵", "이건 멀까요 오 기본 메시지로군요");

var n = 10;
console.log(n);
// 이렇게 하면 콘솔창에 뜨고 n에 10을 넣겠다 머 그런 의미

/* var는 호이스팅이라고 해서 순서가 조금 달라져도 밑에 있는 값을 인식해서 밑에서부터 끌어올려준다 하는 개념이 있대요
근데 그게 오류가? 날 수 있어서? 호이스팅이 안되게 해서 var를 쓰거나 호이스팅이 되어도 상관없다 하면 var를 쓰거나
그도 아니면 호이스팅 이슈가 적게 발생하는 let을 쓴다네요 */

/*var n = 10;
var n = 20;
console.log(n);*/

// let n = 10;
// let n = 20;
// console.log(n);
// 여기서 n은 식별자

// cmd+shift+n을 하면 그 특정 단어를 다 똑같이 바꿔준대요
// 그치만 꼭 백업파일 잘 만들어놓고 하세요

/* let sum = 0.1 + 0.2;
console.log(sum);

let sum2 = (0.1 * 10 + 0.2 * 10) / 10;
console.log(sum2);

let string1 = "hello, world!";
let string2 = "hello, world!";

console.log(string2);

let string3 = "hello," + "wor\nld!";
// \n은 줄바꿈입니다
// 이스케이프 함수라고 해서...

console.log(string3);

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);

let studentscore = {
  ko : 80;
  ko2 : 90;
  ko3 : 870;
};
console.log(student.score.['ko2']);

let num = 10;
let subNum = ++num;
console.log(subNum);

let num2 = 10;
let subNum2 = num2++;
console.log(subNum2);

let a = 10; //전역 스코프, 전역변수
{
  let b = 20;
  console.log(`코드 블록 내부 a: ${a}`);
  console.log(`코드 블록 내부 b: ${b}`);
}
console.log('코드 블록 외부 a: ') */



// 과제하느라 필기 못함ㅎㅎ

var i, j;

for(i= 1; i <= 9; i++) {
  document.write("<h3>" + i + "단</h3>");
for(j = 1; j <= 9; j++) {
  document.write(i + "X" + j + " = " + i*j + "<br>");
}
