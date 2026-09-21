import BaseballGame from "../model/BaseBallGame.js";
import ComputerNumber from "../model/ComputerNumber.js";
import OutputView from "../view/OutputView.js";
import isValidBaseballNumber from "../utils/isValidBaseballNumber.js";

export default class BaseballGameController {

    run(userInput, form) {
        const baseBallGame = new BaseballGame();
        const computerNumber = new ComputerNumber();
        const outputView = new OutputView();

        const answerNumbers = computerNumber.getRandomNumbers();

        console.log("컴퓨터 숫자:", answerNumbers);

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            console.log("현재 입력값:", userInput.value);

            if (isValidBaseballNumber(userInput.value)) {
                const userInputNumbers = userInput.value
                    .split("")
                    .map(Number);

                console.log("사용자 숫자:", userInputNumbers);

                const gameResult = baseBallGame.play(
                    answerNumbers,
                    userInputNumbers
                );

                console.log("게임 결과:", gameResult);

                outputView.printResult(gameResult);
            } else {
                outputView.printError(userInput.value);
            }
        });
    }
}