let pgUp = document.getElementById("pgUp");
let likeBtn = document.querySelectorAll(".likeBtn");

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
likeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this);
    console.log("1", this.children[0].getAttribute("fill"));
    if (this.children[0].getAttribute("fill") === "#fff") {
      this.children[0].setAttribute("fill", "#FF0000");
      this.children[0].setAttribute("stroke", "#FF0000");
    } else {
      this.children[0].setAttribute("fill", "#fff");
      this.children[0].setAttribute("stroke", "#000");
    }
  });
});
