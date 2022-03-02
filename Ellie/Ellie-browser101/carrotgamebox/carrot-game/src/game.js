"use strict";
// field.addEventListener('click' (event) => onFieldClick(event)); 이게 생략된것 
import {Field, ItemType} from "./field.js";
import * as sound from "./sound.js";



// Builder Pattern
export class GameBuilder {
  withGameDuration(duration) {
      this.gameDuration = duration;
      return this;
  }
  withCarrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  withBugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    return new Game(
      this.gameDuration, //
      this.carrotCount,
      this.bugCount
    );
  }
}

export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel'
})


class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

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

    this.field = new Field(carrotCount, bugCount);
    this.field.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBg();
  }

  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideGameButton();
    sound.stopBg();
    this.onGameStop && this.onGameStop(reason);
  }


  onItemClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === ItemType.carrot ) {
      // 당근!
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.stop(Reason.win);
      }
    } else if (item === ItemType.bug) {
      // 벌레!!
      this.stop(Reason.lose);
    }
  };

  showStopButton() {
    const gameBtnicon = this.gameBtn.querySelector(".fas");
    gameBtnicon.classList.add("fa-stop");
    gameBtnicon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }

  hideGameButton() {
    this.gameBtn.style.visibility = "hidden";
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }


startGameTimer() {
let remainingTimeSec = this.gameDuration;
this.updateTimerText(remainingTimeSec);
this.timer = setInterval(() => {
    if(remainingTimeSec <= 0){
        clearInterval(this.timer);
        this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose );
        return;
    } 
    this.updateTimerText(--remainingTimeSec);
}, 1000);
}

stopGameTimer() {
clearInterval(this.timer);
}

updateTimerText(time) {
const min = Math.floor( time / 60 );
const sec = Math.floor( time % 60 );

this.gameTimer.innerHTML = `${min < 10? '0' : '' }${min} : ${sec < 10? '0' : '' }${sec}`;
}


initGame() {
this.score = 0;
this.gameScore.innerText = this.carrotCount;
this.field.init();
//  벌레와 당근을 생성한 뒤 field에 추가해줌
//console.log(fieldRect);
}


updateScoreBoard(){
this.gameScore.innerText = this.carrotCount - this.score;
}

}
