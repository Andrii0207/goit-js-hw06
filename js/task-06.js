const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length="6"]');
console.log(dataLength.dataset.length);

input.addEventListener('blur', leftFocus);

function leftFocus(e) {
  if (e.currentTarget.value.length === Number(dataLength.dataset.length)) {
    dataLength.classList.add('valid');
    dataLength.classList.remove('invalid');
  } else {
    dataLength.classList.add('invalid');
    dataLength.classList.remove('valid');
  }
}
