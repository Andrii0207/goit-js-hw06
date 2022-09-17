const btnMinus = document.querySelector('[data-action="decrement"]')
const btnPlus = document.querySelector('[data-action="increment"]')
const valueCount = document.querySelector("#value")

let counter = 0;

btnPlus.addEventListener("click", addCount)

function addCount() {
    counter += 1;
    valueCount.textContent = counter;
}

btnMinus.addEventListener("click", removeCount)

function removeCount() {
if (valueCount.textContent <= 0) {
    return
}
    counter -= 1;
    valueCount.textContent = counter;
}