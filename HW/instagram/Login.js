const id = document.getElementById("idInput");
const pw = document.getElementById("pwInput");
const logIn = document.getElementById("logIn");
let idSaved = document.getElementById("saveID");
let errStck = 0;

logIn.disabled = true;

id.addEventListener("keyup", actvtd);
pw.addEventListener("keyup", actvtd);

function actvtd() {
  if (id.value == "" || pw.value == "") {
    logIn.disabled = true;
    logIn.classList.add("logInBtnDsbd");
    logIn.classList.remove("logInBtn");
  } else {
    logIn.disabled = false;
    logIn.style.cursor = "pointer";
    logIn.classList.add("logInBtn");
    logIn.classList.remove("logInBtnDsbd");
  }
}

logIn.addEventListener("click", function () {
  let checked = idSaved.checked;
  console.log("1", checked);
  if (id.value == "uhmango") {
    if (pw.value == "0828") {
      alert("로그인되었습니다.");
      location.href = "instagram.html";
    } else {
      console.log("2", checked);
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
      console.log("3", checked);
      if (checked) {
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
    if (checked) {
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

pwInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    let checked = idSaved.checked;
    console.log("1", checked);
    if (id.value == "uhmango") {
      if (pw.value == "0828") {
        alert("로그인되었습니다.");
        location.href = "instagram.html";
      } else {
        console.log("2", checked);
        alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
        console.log("3", checked);
        if (checked) {
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
      if (checked) {
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
  }
});
