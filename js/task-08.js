const loginForm = document.querySelector(
  ".login-form"
);

loginForm.addEventListener(
  "submit",
  function (e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы.

    const formData = new FormData(loginForm);
    const formObject = {};

    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    if (
      !formObject.email ||
      !formObject.password
    ) {
      alert("Please fill in all fields.");
    } else {
      console.log(formObject);
      loginForm.reset();
    }
  }
);
