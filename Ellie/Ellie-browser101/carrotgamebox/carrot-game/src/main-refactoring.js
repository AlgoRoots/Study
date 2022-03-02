'use strict';
import PopUp from './popup.js';
import * as sound from "./sound.js";
import {GameBuilder, Reason} from './game.js';


// field.addEventListener('click' (event) => onFieldClick(event)); 이게 생략된것 
const game = new GameBuilder()
  .withGameDuration(5)
  .withCarrotCount(3)
  .withBugCount(3)
  .build;
const gameFinishBanner = new PopUp();

game.setGameStopListener(reason => {
  let message;
  switch(reason) {
    case Reason.cancle:
      message = 'Replay'
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON!!'
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST'
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
})

// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }


// Element.addEventListener('click', (e) => {callback()});
// Element.addEventListener('click', callback);
// gameFinishBanner.setClickListener(() => {startGame();})

gameFinishBanner.setClickListener(() => {
  game.start();
})

