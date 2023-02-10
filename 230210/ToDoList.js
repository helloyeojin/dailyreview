let inputBox = document.getElementById("iptFld");
let add = document.getElementById("add");
let taskList = document.getElementById("taskList");

add.addEventListener("click", function () {
  var list = document.createElement("li"); // html 'li' 태그 만들기
  if (inputBox.value == "") {
    // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert("내용을 입력해주세요!");
  } else {
    list.innerText = inputBox.value;
    taskList.appendChild(list);
    inputBox.value = "";
    inputBox.focus();
  }

  list.addEventListener("click", function () {
    list.style.textDecoration = "line-through";
    list.style.color = "gray";
  });

  list.addEventListener("dblclick", function () {
    taskList.removeChild(list);
  });
});

inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    var list = document.createElement("li"); // html 'li' 태그 만들기
    if (inputBox.value == "") {
      // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
      alert("내용을 입력해주세요!");
    } else {
      list.innerText = inputBox.value;
      taskList.appendChild(list);
      inputBox.value = "";
      inputBox.focus();
    }

    list.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
      list.style.color = "gray";
    });

    list.addEventListener("dblclick", function () {
      taskList.removeChild(list);
    });
  }
});
