function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const changeColorBtn = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });
});
