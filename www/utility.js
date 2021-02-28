var btn = document.querySelector(".btn");
var msg = document.querySelector(".btn-msg");

var thank = document.querySelector(".thank-msg");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  msg.style.display = "none";
  thank.style.display = "block";
  console.log("done");
});
