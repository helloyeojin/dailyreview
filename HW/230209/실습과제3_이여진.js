var currentyear = 2023;

var birthyear = prompt("태어난 연도를 입력하세요.");
var age = currentyear - birthyear + 1;
document.write("<div>");
document.write("<span>");
document.write(currentyear + "년 현재<br>");
document.write("</span>");
document.write(
  "<span>" +
    birthyear +
    "년</span>에 태어난 사람의 나이는 <span>" +
    age +
    "세</span>입니다"
);
document.write("</div>");
