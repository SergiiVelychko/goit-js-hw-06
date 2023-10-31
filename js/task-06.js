const validationInput = document.getElementById(
  "validation-input"
);

validationInput.addEventListener("blur", () => {
  const requiredLength = Number(
    validationInput.getAttribute("data-length")
  );
  const currentLength =
    validationInput.value.length;

  if (currentLength === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
