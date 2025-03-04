let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  document.body.classList.add("started");
  document.getElementById("h").innerHTML = "Mohamed Hesham";
  document.getElementById("o").innerHTML = "Olla AbdulNasser";
  document.getElementById("a").innerHTML = "amr Elsayed Ahmed";
  document.getElementById("s").innerHTML = "Ahmed Samir";
});
