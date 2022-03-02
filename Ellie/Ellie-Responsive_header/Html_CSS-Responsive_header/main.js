const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const sns = document.querySelector('.navbar_sns');


/* 이 부분에서 거의 한시간동안 헤맸다. 강의 영상과 똑같이 입력했는데 왜 안될까..하면서. 문제는 
toogleBtn 에 a태그를 걸어놔서 일어나는 오류였다. 해결 방법은 총 3가지 
1. a href="#" 로 링크를 막는다.
2. 아래와같이 event를 막는 태그를 넣는다.
3. 애초에 토글은 버튼이지 앵커가아니다. btn을 써서 이럴 일을 방지하자. */
toggleBtn.addEventListener('click', (e) => {
   e.preventDefault();
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});


