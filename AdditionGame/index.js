let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let tryAgainMsg = "Please Try Again!"
let successMsg = "Congratulations! You got it right"

function reset() {
    let firstRandom = Math.ceil(Math.random() * 100)
    let secondRandom = Math.ceil(Math.random() * 100)
    first.textContent = firstRandom;
    second.textContent = secondRandom;
    userInputEl.value = "";
    result.textContent = "";
}
reset()

function check() {
    let firstInt = parseInt(first.textContent);
    let secondInt = parseInt(second.textContent);
    let inputEl = parseInt(userInputEl.value);
    let sumOf = firstInt + secondInt

    if (sumOf === inputEl) {
        result.textContent = successMsg;
        result.style.backgroundColor = "#028a0f"
    } else {
        result.textContent = tryAgainMsg;
        result.style.backgroundColor = "1e217c"
    }
}