'use strict';

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
          });
    }


    setClickListener(onClick){
        this.onClick = onClick;
        //팝업안에 있는 멤버변수 onClick에 함수에서 전달받은 onClick이라는 인자를 할당해주는 것. 
    }

    showWithText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
      }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}