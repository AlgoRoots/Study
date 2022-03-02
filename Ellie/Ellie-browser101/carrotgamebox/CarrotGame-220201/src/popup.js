"use strict";

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popupText = document.querySelector(".pop-up__message");
    this.popUprefreshBtn = document.querySelector(".pop-up__refresh");
    this.popUprefreshBtn.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUp.classList.remove("hide");
    this.popupText.innerText = text;
  }

  hide() {
    this.popUp.classList.add("hide");
  }
}
