'use strict';

export default class PopUp {
    constructor() {
        this.popupContainer = document.querySelector('.pop-up');
        this.popupText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        })
    }

    setClickListener(onClick) {
        this.onClick = onClick;
    }

    showWithText(text){
        this.popupText.innerText = text;
        this.popupContainer.classList.remove('pop-up--hide');
    }
    

    hide() {
        this.popupContainer.classList.add('pop-up--hide');
    }
}

