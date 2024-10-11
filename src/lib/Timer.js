export class Timer {
  constructor(game) {
    this.game = game;
  }

  updateTimer() {
    this.game.timeRemaining -= 1;
    if (this.game.timeRemaining <= 0) {
      this.game.gameLogic.gameOver();
    }
    this.game.timerText.setText(`Time: ${this.game.timeRemaining}`);
  }

  startTimer() {
    let timer = setInterval(() => {
      if (this.game.timeRemaining <= 0) {
        timer = clearInterval(timer);
        return;
      }

      if (this.game.playing) {
        console.log(123);
        this.updateTimer();
      }
    }, 1000);
  }
}

export default Timer;
