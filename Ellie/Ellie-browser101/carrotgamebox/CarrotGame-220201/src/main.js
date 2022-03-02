"use stict";
import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";
import * as sound from "./sound.js";

// const CARROT_COUNT = 10;
// const BUG_COUNT = 5;
// const SET_TIME = 5;

const gameFinishBanner = new PopUp();
//field.addEventListener("click", (event) => onFieldClick(event));
//field.addEventListener("click", onFieldClick);

const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay?";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON!";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST?";
      sound.playAlert();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

//gameFinishBanner.setClickListener(startGame);

gameFinishBanner.setClickListener(() => {
  game.start();
});
