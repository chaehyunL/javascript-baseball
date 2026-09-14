export default class InputValidation {
    isValid(userInput) {
        if (userInput.length !== 3) {
            return false;
        }
        if (!/^[1-9]+$/.test(userInput)) {
            return false;
        }
        if (new Set(userInput).size !== 3) {
            return false;
        }
        return true;
    }
}