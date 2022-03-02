'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const SET_TIME = 3;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popupContainer = document.querySelector('.pop-up');
const refreshBtn = document.querySelector('.pop-up__refresh');
const popupText = document.querySelector('.pop-up__message');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

let started = false;
let score =  0;
let timer = undefined;


// field.addEventListener('click' (event) => onFieldClick(event)); 이게 생략된것 
field.addEventListener('click', onFieldClick);


// 게임 시작 버튼 

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
})

refreshBtn.addEventListener('click', () => {
  startGame();
  popUphide();
})


function startGame() {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSoune(bgSound);
}

function stopGame() {
  started = false;
  stopGameTimer();
  hideGameButton();
  showPopUpWithText('REPLAY?');
  playSoune(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  hideGameButton();
  if(win) {
    playSoune(winSound);  
  } else {
    playSoune(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win? 'YOU WON!!' : 'YOU LOST');
  
}

function showStopButton() {
    const gameBtnicon = gameBtn.querySelector('.fas');
    gameBtnicon.classList.add('fa-stop');
    gameBtnicon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainingTimeSec = SET_TIME;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
      if(remainingTimeSec <= 0){
          clearInterval(timer);
          finishGame(score === CARROT_COUNT);
          return;
      } 
      updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
clearInterval(timer);
}

function updateTimerText(time) {
  const min = Math.floor( time / 60 );
  const sec = Math.floor( time % 60 );

  gameTimer.innerHTML = `${min < 10? '0' : '' }${min} : ${sec < 10? '0' : '' }${sec}`;
}

function showPopUpWithText(text){
  popupText.innerText = text;
  popupContainer.classList.remove('pop-up--hide');
}

function popUphide() {
  popupContainer.classList.add('pop-up--hide');
}

function initGame() {
  score = 0;
  field.innerHTML = '';
  gameScore.innerText = CARROT_COUNT;
  //  벌레와 당근을 생성한 뒤 field에 추가해줌
  //console.log(fieldRect);
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event) {
  if(!started) {
    return;
  }
  const target = event.target;
  if(target.matches('.carrot')) {
    // 당근!
    target.remove();
    score++;
    playSoune(carrotSound);
    updateScoreBoard();
    if(score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if(target.matches('.bug')) {
    // 벌레!!
    finishGame(false);
  }
}

function playSoune(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard(){
  gameScore.innerText = CARROT_COUNT - score;
}


// 랜덤배치 
function addItem(calssName, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0 ; i < count ; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', calssName);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2); 
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      field.appendChild(item);
  }

}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}


