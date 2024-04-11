const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value.trim();
  });
  const isAnyFieldEmpty = Object.values(formValues).some(
    (value) => value === ""
  );
  if (isAnyFieldEmpty) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(formValues);
  loginForm.reset();
});
