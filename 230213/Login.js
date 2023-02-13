let id = document.getElementById("idInput");
let pw = document.getElementById("pwInput");
let logIn = document.getElementById("logIn");
let saveID = document.getElementById("saveID");
let checked = document.getElementById("saveID");
let idSaved = checked.getAttribute("checked");
let errStck = 0;

logIn.addEventListener("click", function (e) {
  if (id.value == "uhmango") {
    if (pw.value == "0828") {
      alert("로그인되었습니다.");
      location.href = "https://www.instagram.com/";
    } else {
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
      if (idSaved == true) {
        pw.value = "";
        pw.focus();
        errStck++;
      } else {
        id.value = "";
        pw.value = "";
        id.focus();
        errStck++;
      }
    }
  } else {
    alert("존재하지 않는 계정입니다.");
    if (idSaved == true) {
      console.log(pw.value);
      pw.value = "";
      id.focus();
    } else {
      id.value = "";
      pw.value = "";
      id.focus();
    }
  }
  if (errStck >= 5) {
    alert("비밀번호를 5회 이상 틀리셨습니다. 비밀번호를 변경해주세요.");
    location.href = "https://www.instagram.com/accounts/password/reset/";
  }
});
