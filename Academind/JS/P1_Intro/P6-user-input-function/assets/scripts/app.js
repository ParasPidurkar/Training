const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  console.log("add function is called ")
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
