let pgUp = document.getElementById("pgUp");
let likeBtn = document.querySelectorAll(".likeBtn");
let bmrkBtn = document.querySelectorAll(".bookmark");
let countNum = document.querySelectorAll(".count");
/////////////////
//페이지 스크롤//
/////////////////
pgUp.addEventListener("click", sTo);

function sTo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//////////
//좋아요//
//////////
var likeCount = [0, 0];

likeBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    console.log(this);
    console.log("1", this.children[0].getAttribute("fill"));
    if (this.children[0].getAttribute("fill") === "#fff") {
      this.children[0].setAttribute("fill", "#FF0000");
      this.children[0].setAttribute("stroke", "#FF0000");
      likeCount[index]++;
      countNum[index].innerHTML = `<b> 외 ${likeCount[index]}명</b>`;
    } else {
      this.children[0].setAttribute("fill", "#fff");
      this.children[0].setAttribute("stroke", "#000");
      likeCount[index]--;
      countNum[index].innerHTML = "";
    }
  });
});

bmrkBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this);
    console.log("1", this.children[0].getAttribute("fill"));
    if (this.children[0].getAttribute("fill") === "#fff") {
      this.children[0].setAttribute("fill", "#000");
      this.children[0].setAttribute("stroke", "#000");
    } else {
      this.children[0].setAttribute("fill", "#fff");
      this.children[0].setAttribute("stroke", "#000");
    }
  });
});
