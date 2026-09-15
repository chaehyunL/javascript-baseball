export default class BaseballGame {

  play(computerInputNumbers, userInputNumbers) {
    const strikeCount = this.getStrike(computerInputNumbers, userInputNumbers);
    const ballCount = this.getBall(computerInputNumbers, userInputNumbers)

    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    }

    if (strikeCount === 0) {
      return `${ballCount}볼`;
    }

    if (ballCount === 0) {
      return `${strikeCount}스트라이크`;
    }

    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }

  getStrike(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount++;
      }
    }

    return strikeCount;
  }

  getBall(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== j && computerInputNumbers[i] === userInputNumbers[j]) {
          ballCount++;
        }
      }
    }
    return ballCount;
  }
}