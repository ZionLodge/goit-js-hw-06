document.addEventListener("DOMContentLoaded", function () {
  const inputNumber = document.querySelector("#controls input[type='number']");
  const createBtn = document.querySelector("button[data-create]");
  const destroyBtn = document.querySelector("button[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createBtn.addEventListener("click", function () {
    const amount = parseInt(inputNumber.value);
    if (!isNaN(amount)) {
      createBoxes(amount);
    }
  });

  destroyBtn.addEventListener("click", function () {
    destroyBoxes();
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
});
