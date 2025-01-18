const loginForm = document.querySelector("form.login-form");
document.querySelector("[name=email]").autocomplete = "off";
document.querySelector("[name=password]").autocomplete = "off";
const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
};
loginForm.addEventListener("submit", handleSubmit);
