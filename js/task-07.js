const input = document.querySelector('input');

input.addEventListener('input', changeFontSize);

function changeFontSize() {
  text.style.fontSize = `${input.value}px`;
}
