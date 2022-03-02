// 객체는 언제쓰나
// 자바스크립트를 만든 사람들이 쉽게 개발하라고 수학적인 부분을 미리계산해서 넣었다. 
// 수많은 기능들을 잘 정리정돈해서 우리한테 제공하지 않는다면, 
// 객체를 이용하기로 했다. 그 객체의 이름으로 Math라는 이름을 정했다. 
// Math는 수학과 관련된 변수 PI, 함수(random(), floor()) 들을 그룹핑해서 잘 정리정돈하기로 했다. 

// 자스는 객체지향언어이다. 
// 이미 우리는 객체를 사용하고 있었다. 이해도 하기 전에 익숙해진 상태가 되어버린 것. 

Math.PI
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); //method 함수가 객체에 소속되어있을 때, (아닐 때는 function)
console.log("Math.floor(3.9)", Math.floor(3.9));


// 객체 만들어보기. 

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));