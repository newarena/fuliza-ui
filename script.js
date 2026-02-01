const buttons = document.querySelectorAll(".options button");
const continueBtn = document.querySelector(".continue");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    continueBtn.style.background = "#0f8a3c";
    continueBtn.style.color = "#fff";
  });
});
