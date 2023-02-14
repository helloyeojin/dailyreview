let pgUp = document.getElementById("pgUp");

pgUp.addEventListener("click", sTo);

function sTo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
