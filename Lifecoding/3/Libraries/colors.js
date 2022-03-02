var Link= {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

        // Library Jquery 사용
        $('a').css('color', color);
    }
}
// document : 객체, querySelctor : 함수이면서 객체에 소속되어있기 때문에 Method 라고 한다. //

// 소속된 변수의 값으로 함수를 지정할 수 있고, 이로 객체에 소속된 함수(Method)를 만들 수 있다. //
// 객체에 소속된 변수 = Property //

var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color); 
    },
    setBGcolor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBGcolor('black');
        Body.setColor('white');          
        self.value = 'day';

        Link.setColor('powderblue');
    } else {
        Body.setBGcolor('white');
        Body.setColor('black');
        self.value = 'night';

        Link.setColor('blue');
    }
}