import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./module/message.js";
import {
  MIN_FORWARD_THRESHOLD,
  RANDOM_MAX,
  RANDOM_MIN,
} from "./module/constants.js";

class GameManager {
  constructor() {
    this.playerGroup = [];
    this.attemptCount = null;
  }

  registerPlayer(player) {
    this.playerGroup.push(player);
  }

  shouldGoForward() {
    const randomNum = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
    return randomNum >= MIN_FORWARD_THRESHOLD;
  }

  performAttempt() {
    this.playerGroup.forEach((player) => {
      if (this.shouldGoForward()) player.moveDistance += 1;
    });
  }

  playRacing() {
    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < this.attemptCount; i++) {
      this.performAttempt();
    }
  }
}

export default GameManager;
