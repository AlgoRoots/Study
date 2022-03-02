"use stict";

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const SET_TIME = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect ();

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');



const popUp = document.querySelector('.pop-up');
const popupText = document.querySelector('.pop-up__message');
const popUprefreshBtn = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

// 게임의 상태를 기억하고 있어야하는 변수를 만들어야 함. 
let started = false;
// 처음에는 게임이 stop상태이니 false로 
let score = 0;
let timer = undefined;


// field.addEventListener('click', (event) => onFieldClick(event));
field.addEventListener('click', onFieldClick);

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
 
})

popUprefreshBtn.addEventListener('click' , () => {
  startGame();
  hidePopUp();
})



function startGame() {
  started = true;
  initGame();
  startGameTimer();
  showStopBtn();
  showTimerAndScore();
  playSound(bgSound);
}

function stopGame() {
  started = false;
  showPopUpWithText('Restart ?');
  stopGameTimer();
  hideStopBtn();
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  started = false;
  if(win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  hideStopBtn();
  stopGameTimer();
  stopSound(bgSound);
  showPopUpWithText(win? `YOU WON!` : `YOU LOST`);
}

function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0 ; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`
        item.style.top = `${y}px`
        field.appendChild(item);
    }
}


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}



function initGame() {
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    
    // 벌레와 당근을 생성한 뒤 field에 추가해줌
    // console.log(fieldRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}


function onFieldClick(event) {
  if (!started) {
    return;
  }
  const target = event.target;
  if(target.matches('.carrot')) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    
    if(score === CARROT_COUNT){
      finishGame(true);
    }    
  } else if (target.matches('.bug')) {
    finishGame(false);
    playSound(bugSound);
  } 
}

function playSound(sound) {
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}

function startGameTimer(){
  let remainingTime = SET_TIME;
  updateTimerText(remainingTime);
  // timer 변수로 지정하는 과정이 잘 이해 안감. 
  timer = setInterval(() => {
    if(remainingTime <= 0){
        clearInterval(timer);
        finishGame(score === CARROT_COUNT);
        return;
    }
    updateTimerText(--remainingTime);
  }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updateTimerText(time){
    const min = Math.floor(time/60);
    const sec = Math.floor(time%60);

    gameTimer.innerText = ` ${min<10? '0' : '' }${min} : ${sec< 10? '0' : ''}${sec} `;
}


function showStopBtn() {
  const btnIcon = document.querySelector('.fas');
  btnIcon.classList.add('fa-stop');
  btnIcon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';

}

function hideStopBtn() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  gameScore.style.visibility = 'visible';
  gameTimer.style.visibility = 'visible';
}

function showPopUpWithText(text) {
  popUp.classList.remove('hide');
  popupText.innerText = text;

}

function hidePopUp() {
  popUp.classList.add('hide');

}