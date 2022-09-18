function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.create.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  console.dir(refs.input.value);

  refs.boxes.createElement('<div></div>');
}
