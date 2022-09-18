function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.color.textContent = getRandomHexColor();
}
