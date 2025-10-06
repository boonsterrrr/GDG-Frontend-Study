const number = document.getElementById("counting-num");

const TenincButton = document.getElementById("tenincrease");

const incButton = document.getElementById("increase");

const decButton = document.getElementById("decrease");

const TendecButton = document.getElementById("tendecrease");

const resetButton = document.getElementById("reset");

let count = 0;

number.textContent = count;

function tenincreaseCount() {
  count = count + 10;

  number.textContent = count; // 숫자 변화 반영
}

function increaseCount() {
  count++; // count = count + 1

  number.textContent = count; // 숫자 변화 반영
}

function decreaseCount() {
  count--;
  number.textContent = count;
}

function tendecreaseCount() {
  count = count - 10;

  number.textContent = count; // 숫자 변화 반영
}

function reset() {
  count = 0;
  number.textContent = count;
}

TenincButton.addEventListener("click", tenincreaseCount);
incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
TendecButton.addEventListener("click", tendecreaseCount);
resetButton.addEventListener("click", reset);
