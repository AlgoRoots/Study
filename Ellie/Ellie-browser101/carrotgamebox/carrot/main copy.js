"use strict"

const GAME_TIME = 10;
let setTime = GAME_TIME;
let isPlaying = false;

// 변수 시작버튼, 리플레이버튼 당근, 벌레


const startBtn = document.querySelector('.Btn-start');
const replayBtn = document.querySelector('.Btn-replay');
const carrot = document.querySelector('.caroot');
const bug = document.querySelector('.bug');
const timer = document.querySelector('.timer');
// 1. 시작버튼 누르면 타이머가 시작된다.  벌레와 당근이 랜덤으로 배치된다. 



startBtn.addEventListener('click', () => {
    CountDownfun();
});

replayBtn.addEventListener('click', () => {
    CountDownfun();
});



function CountDownfun(){
    displayTime(setTime);
    const CountDown = setInterval( () => {
    setTime--;
    displayTime(setTime);
    if (setTime <= 0 || setTime < 1) {
        resultGame();
    };

    },1000)
}


function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);

    timer.innerHTML= `${min < 10? '0': ''}${min} : ${sec<10?'0' : ''}${sec}`;
}

function resultGame() {
    timer.innerHTML = `END`;
}