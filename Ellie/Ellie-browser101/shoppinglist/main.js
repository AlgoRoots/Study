'use strict' ;





const items = document.querySelector('.items');
const inputText = document.querySelector('.addText');
const inputNum = document.querySelector('.addNum');
const addBtn = document.querySelector('.addBtn');





function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = inputText.value;
    if (text === '') {
        inputText.focus();
        return;
    }
    //console.log(text);
    // // 2. 새로운 아이템을 만듦 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    
    // // 3. items 컨테이너안에 새로 만든 아이템을 추가한다. 
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    // 5. input 을 초기화한다. 
    inputText.value = '';
    inputText.focus();
}

function createItem(text) {


    let itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    
    const itemName = document.createElement('div');
    itemName.setAttribute('class', 'item__name');
    itemName.innerText = text;
    
    const icons = document.createElement('div');
    icons.setAttribute('class', 'icons');
    
    const checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'iconcircle check');
    checkBtn.innerHTML = '<i class="fas fa-check "></i>';
    //클릭하면 완료된 클래스 추가 
    // 1. 버튼 배경색이빠지고 아이콘 색 바뀜 .iconcircle_Done  .fas_Done
    // 2. 글씨에 줄그어지고 색 연해짐  .item__name_Done .item_Done
    // 3. item-row배경색 없어짐 .iconcircle_Done 

    // function 구매완료, 구매 전
    function Done(){
        item.setAttribute('class', 'item_Done');
        item.removeAttribute('item');
        checkBtn.setAttribute('class', 'iconcircle_Done');
        checkBtn.removeAttribute('iconcircle');
        checkBtn.innerHTML= '<i class="fas fa-check checkIcon_Done"></i>';
        itemName.setAttribute('class', 'item__name_Done')
            }

    function NotYet(){
        item.setAttribute('class', 'item');
        item.removeAttribute('item_Done');
        checkBtn.removeAttribute('checkIcon_Done');
        itemName.removeAttribute('item__name_Done');
        checkBtn.setAttribute('class', 'iconcircle check');
        checkBtn.innerHTML = '<i class="fas fa-check "></i>';
        itemName.removeAttribute('item__name_Done');
        itemName.setAttribute('class', 'item__name');
    }

    // 함수실행 토글 이용함. 

    checkBtn.addEventListener('click', () => {
        item.classList.toggle('item_Done');
        checkBtn.classList.toggle('iconcircle_Done');
        itemName.classList.toggle('item__name_Done');
        
        
        let checkClass = checkBtn.classList.contains('iconcircle_Done');
        if (checkClass  == true){
            checkBtn.innerHTML= '<i class="fas fa-check checkIcon_Done"></i>';
        } else {
            checkBtn.innerHTML = '<i class="fas fa-check "></i>';
        };
       
        // if (checkClass  == true){
        //     Done();
        // } else {
        //     NotYet();
        // };
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'iconcircle bin');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });


//개수 띄우기
// 쇼핑완료 개수 

// 남은 개수 

function createCount(){
    const leftItems = document.querySelector('.LeftItems');
    const TotalItems = document.querySelector('.TotalItems');
    const CountleftItems = document.getElementsByClassName('item__name').length+1;
    const CountTotalItems = document.getElementsByClassName('item__row').length+1;
        
        TotalItems.innerText = `Total Items (${CountTotalItems})`;
        leftItems.innerText = `Left Items (${CountleftItems})`;
    }
    
    createCount();


    icons.appendChild(checkBtn);
    icons.appendChild(deleteBtn);

    item.appendChild(itemName);
    item.appendChild(icons);

    itemRow.appendChild(item);

    items.appendChild(itemRow);

    return itemRow;
}



addBtn.addEventListener('click', () => {
    onAdd();
});

// enter누르면 입력됨
inputText.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
})


// 클릭하면 체크됨 
// const checkBtn = document.querySelector('.check');
// let itemRow = document.querySelector('.item__row');



// checkBtn.addEventListener('click', () => {

//     let itemRow = 0;
//     console.log(itemRow);
//     if ( itemRow == 0){
//         itemRow.classList.add('item__row_Done');
//         itemRow = 1;
//     } else { 

//     itemRow.classList.remove('item__row_Done');
//     itemRow = 0;
// }

// })




