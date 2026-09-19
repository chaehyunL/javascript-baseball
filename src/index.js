import BaseballGame from "./model/BaseBallGame.js";
import ComputerNumber from "./model/ComputerNumber.js";
import InputValidation from "./view/InputValidation.js";
import OutputView from "./view/OutputView.js";

const baseBallGame = new BaseballGame();
const computerNumber = new ComputerNumber();
const inputValidation = new InputValidation();
const outputView= new OutputView(); 

const answerNumbers = computerNumber.getRandomNumbers();

const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputValidation.isValid(userInput.value)) {
        const userInputNumbers = userInput.value
            .split("").map(Number);

        const gameResult = baseBallGame.play(answerNumbers, userInputNumbers);

        result.textContent = gameResult;
    }
    else {
        outputView.printResult(userInput.value);
    }
});

