"use strict";

import { Field, ItemType } from "./field.js";
import * as sound from "./sound.js";

//Builder pattern
export class GameBuilder {
  gameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  carrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  bugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    return new Game(this.gameDuration, this.carrotCount, this.bugCount);
  }
}

export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancel: "cancel",
});

class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.field = new Field(carrotCount, bugCount);
    this.field.setClickListener(this.onItemClick);
    this.gameTimer = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.gameBtn = document.querySelector(".game__button");

    this.gameBtn.addEventListener("click", () => {
      if (this.started) {
        this.stop(Reason.cancel);
      } else {
        this.start();
      }
    });

    // 게임의 상태를 기억하고 있어야하는 변수를 만들어야 함.
    this.started = false;
    // 처음에는 게임이 stop상태이니 false로
    this.score = 0;
    this.timer = undefined;
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.startGameTimer();
    this.showStopBtn();
    this.showTimerAndScore();
    sound.playBG();
  }

  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideStopBtn();
    sound.stopBG();
    this.onGameStop && this.onGameStop(reason);
    //this.gameFinishBanner.showWithText("Restart ?");
  }

  onItemClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === ItemType.carrot) {
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.stop(Reason.win);
      }
    } else if (item === ItemType.bug) {
      this.stop(Reason.lose);
    }
  };

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
  }

  showTimerAndScore() {
    this.gameScore.style.visibility = "visible";
    this.gameTimer.style.visibility = "visible";
  }

  startGameTimer() {
    let remainingTime = this.gameDuration;
    this.updateTimerText(remainingTime);
    // timer 변수로 지정하는 과정이 잘 이해 안감.
    this.timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(this.timer);
        this.stop(this.score === this.carrotCount ? Reason.win : Reason.lose);
        return;
      }
      this.updateTimerText(--remainingTime);
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateTimerText(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);

    this.gameTimer.innerText = ` ${min < 10 ? "0" : ""}${min} : ${
      sec < 10 ? "0" : ""
    }${sec} `;
  }

  showStopBtn() {
    const btnIcon = this.gameBtn.querySelector(".fas");
    btnIcon.classList.add("fa-stop");
    btnIcon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }

  hideStopBtn() {
    this.gameBtn.style.visibility = "hidden";
  }

  initGame() {
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.field.init();
    //  벌레와 당근을 생성한 뒤 field에 추가해줌
    //console.log(fieldRect);
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
