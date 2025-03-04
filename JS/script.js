let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.body.classList.add("started");
  document.getElementById("h").innerHTML = "Mohamed Hesham";
  document.getElementById("o").innerHTML = "olla";
  document.getElementById("a").innerHTML = "amr";
  document.getElementById("s").innerHTML = "samir";
});
