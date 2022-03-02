class Person1{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second =second;

        // console.log('constructor');
    }
    sum(){
        return 'prototype : ' +(this.first+this.second);
        }
}



// Kim 이라는 객체에 sum이라는 함수를 포함시키면 Kim이라는 객체는 다르게 동작하게 된다. 
var Kim = new Person1('Kim', 10, 20);
Kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var Lee = new Person1('Lee', 10, 10 );
// console.log("Kim.sum()", Kim.sum());
console.log("Lee.sum()", Lee.sum());
console.log("Kim.sum()", Kim.sum());

//class.js를 쓰는게 제일 나을듯. 생활코딩님 기준에서는 
              
