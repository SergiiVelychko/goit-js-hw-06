const fontSizeControl = document.querySelector(
  "#font-size-control"
);
const textSpan = document.querySelector("#text");

textSpan.style.fontSize =
  fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize =
    fontSizeControl.value + "px";
});
