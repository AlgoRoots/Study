"use strict"

const GAME_TIME = 5;
let score = 0;
let time =  GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];


const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const btn = document.querySelector('.button');



init();
function init(){
    getWords()
    wordInput.addEventListener('input', checkMatch)
}



// 게임실행 
btn.addEventListener('click' , () => {
    run();
})

function run() {
    if(isPlaying){
        return;
    }
    isPlaying = true;
    time =  GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText= 0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus, 50)
    buttonChange('Playing Game');
}

// 게임중인지 아닌지 상태체크 
function checkStatus() {
    if(!isPlaying && time === 0){
        buttonChange('Start Game');
        clearInterval(checkInterval);
    }
}


// 단어불러오기
function getWords() {
    words = ['Hello', 'Banna' , 'Apple' , 'Cherry'];
    buttonChange('Start Game')
}


// 단어 일치 체크
function checkMatch(){
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        wordInput.value = "";
        if(!isPlaying){
            return;
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;

        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex]
        
    }
}



// countDown 
function countDown() {
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying) {
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}

function buttonChange(text){
    btn.innerText = text;
    text === 'Start Game' ? btn.classList.remove('loading') : btn.classList.add('loading')
}

