let inputBox = document.getElementById("iptFld");
let add = document.getElementById("add");
let taskList = document.getElementById("taskList");

function addTask() {
  let list = document.createElement("li");
  let chckbx = document.createElement("label");
  let chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  let chkTxt = document.createElement("span");
  if (inputBox.value == "") {
    // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert("내용을 입력해주세요!");
  } else {
    chkTxt.innerHTML = inputBox.value;
    chckbx.appendChild(chk);
    chckbx.appendChild(chkTxt);
    list.appendChild(chckbx);
    taskList.appendChild(list);
    console.log(".", taskList);
    inputBox.value = "";
    inputBox.focus();
  }

  console.log("chk", chk);
  chk.addEventListener("click", function () {
    let chckd = this;
    console.log(chckd.checked);
    if (chckd.checked) {
      list.style.textDecoration = "line-through";
      list.style.color = "gray";
    } else {
      list.style.textDecoration = "none";
      list.style.color = "black";
    }
  });

  list.addEventListener("dblclick", function () {
    taskList.removeChild(list);
  });
}

add.addEventListener("click", function () {
  addTask();
});

iptFld.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addTask();
  }
});
