export default class ComputerNumber {
    getNumber() {
        const numbers = [];

        while (numbers.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }
}