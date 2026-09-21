import { NUMBER_LENGTH } from "../constants/Baseballconstants.js";

const isValidBaseballNumber = (userInput) => {
    if (userInput.length !== NUMBER_LENGTH) {
        return false;
    }
    if (!/^[1-9]+$/.test(userInput)) {
        return false;
    }
    if (new Set(userInput).size !== NUMBER_LENGTH) {
        return false;
    }
    return true;
};

export default isValidBaseballNumber;
