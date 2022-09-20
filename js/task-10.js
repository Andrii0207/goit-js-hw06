function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.create.addEventListener('click', renderBox);
refs.destroy.addEventListener('click', destroyBox);

function renderBox() {
  createBoxes(refs.input.value);
}

const boxesList = [];

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${20 + 10 * i}px`;
    box.style.height = `${20 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    console.log(box);
    boxesList.push(box);
  }

  refs.boxes.append(...boxesList);
}

function destroyBox() {
  refs.boxes.innerHTML = '';
}
