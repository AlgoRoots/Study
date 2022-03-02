"use strict"

const GAME_TIME = 10;
let setTime = GAME_TIME;
let isPlaying = false;
let timeInterval;

// 변수 시작버튼, 리플레이버튼 당근, 벌레


const startBtn = document.querySelector('.Btn-start');
const replayBtn = document.querySelector('.Btn-replay');
const clikedcarrot = document.querySelector('.caroot');
const bug = document.querySelector('.bug');
const timer = document.querySelector('.timer');
const gameContainer = document.querySelector('.game-container');

let leftCarrotCount = document.querySelector('.left-carrot');
let lostAlert = document.querySelector('.lost-alert');

let clickedItems = {
    el: null,
    class: null,
    index: null,
};


let btnStartColor = 'rgba(255, 60, 0, 0.918)';

init();

function init(){
    getItems()
}

function getItems(){
    const Items = []
}

// 게임아이템 랜덤배치 
const itemCount = 9;

// Array(itemCount).fill().forEach( (_, i) => { 
//     const item = document.createElement('button');
    
//     item.setAttribute('data-index', i)
//     item.classList.add(`item${i}`);
//     gameContainer.appendChild(item);



//     console.log(item);
// })

btnChange(btnStartColor);

// 당근벌레 배열





// 1. 시작버튼 누르면 타이머가 시작된다.  벌레와 당근이 랜덤으로 배치된다. 

//timer.innerHTML=  displayTime(setTime);

startBtn.addEventListener('click', () => {
    run();
    // 클릭하면 랜덤배치
    setRandom();
    lostAlertbox('none');
  
   
});

replayBtn.addEventListener('click', () => {
    run();
    setRandom();
    lostAlertbox('none');
});



let items = [];
items = createItemRandom();

function setRandom(){
    shuffle(items).forEach(item => gameContainer.appendChild(item))
}

// 2.  반응 2 타이머시간 10초 동안에는?  게임중에 당근을 클릭하고 남은 개수가 화면에 표시된다. 


//  let i = 0 < i <= 10;


//          let clickedCarrot = document.querySelector(`.caroot${i}`);

//         clickedCarrot.addEventListener('click', () => {
//              document.querySelector(`'carrot${i}'`).style.display = 'none';
//         })


//lostAlert.style.display = 'block';


gameContainer.addEventListener('click', e => {
    console.log(e);
    
});



// 타이머 0되면 youlost 보여주기. 






function run() {
    isPlaying = true;
    setTime = GAME_TIME;
    timeInterval = setInterval(countDown, 1000);
  
}


function countDown(){
    displayTime(setTime);
    setTime > 0 ? setTime-- : isPlaying = false;
    if(setTime <= 0) {
        lostAlertbox('block');
    };
    if(!isPlaying){
        clearInterval(timeInterval)
    };
    
    displayTime(setTime);
}

// lost box
function lostAlertbox(text) {
    lostAlert.style.display = `${text}`;
}


function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);

    timer.innerHTML= `${min < 10? '0': ''}${min} : ${sec< 10?'0' : ''}${sec}`;
}

function resultGame() {
    timer.innerHTML = `END`;
}

function btnChange(color){
    startBtn.style.color = color;
    color === btnStartColor ? startBtn.classList.remove('Btn-playing') : startBtn.classList.add('Btn-playing') ;

}



// 당근벌레 배열랜덤

function createItemRandom(){
    const tempArray = [];
    Array(itemCount).fill().forEach( (_, i) => { 
        const carrot = document.createElement('button');
        carrot.setAttribute('data-index', i)
        carrot.classList.add(`carrot${i}` , 'carrot');
        carrot.innerHTML = `<img src="/img/carrot.png" alt=""></img>`;
    
        const bug = document.createElement('button');
        bug.setAttribute('data-index', i)
        bug.classList.add(`bug${i}`, 'bug');
        bug.innerHTML = `<img src="/img/bug.png" alt="">`;
        
        tempArray.push(carrot)
        tempArray.push(bug)
        // gameContainer.appendChild(carrot);
        // gameContainer.appendChild(bug);

        // gameContainer.innerHTML = `
        // <button data-index= "${i}" class="caroot${i}"><img src="/img/carrot.png" alt=""></button>
        // <button data-index= "${i}" class="bug${i}"><img src="/img/bug.png" alt=""></button>
        // `
    })
    return tempArray;
}


// 랜덤배치해주는 반복문 실행안됨 

function shuffle(array) {
    let index = array.length -1;
    while(index > 0) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
        index--;
    }
    return array;
}
