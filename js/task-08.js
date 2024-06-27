const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const email = formData.get("email");
  const password = formData.get("password");

  console.log(`Email: ${email}, Password: ${password}`);

  this.reset();
});
