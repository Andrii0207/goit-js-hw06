const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', inputData);

function inputData(event) {
  if (!event.currentTarget.value) {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
}
