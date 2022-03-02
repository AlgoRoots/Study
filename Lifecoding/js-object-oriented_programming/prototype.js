
function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    // this.sum = function(){
    //     return this.first+this.second+this.third;
    // }
}

// Person이라는 constroctor (생성자함수) 안에 들어가 있지않아 아래의 정의한 코드가 객체가 만들어질 때마다 실행되지 않고
// 한번만 실행된다. = > 성능절약, 메모리 절약

Person.prototype.sum = function(){
    return 'prototype : ' +(this.first+this.second+this.third);
}

// 가지고 있는 객체가 1억개일 때, Kim이라는 변수가 가리키는 객체의 sum Method를 다르게 동작하고 싶을 때
var Kim = new Person('Kim', 10, 20, 30); // 각 점수 입력
Kim.sum = function(){
    return 'this : '+(this.first+this.second+this.third);
}
var Lee = new Person('Lee', 10, 20, 10);
console.log("Kim.sum()", Kim.sum());
console.log("Lee.sum()", Lee.sum());



function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.printMe = function(){
        return console.log(this.name,this.age+ "살입니다.");
    }
}

var kim = new Person2("kim", 15);
kim.printMe();

var lee = new Person2("lee", 16);
lee.printMe = function(){
     return console.log(this.name, this.age);
}
lee.printMe();

var park = new Person2("park", 17);
Person2.prototype.printMe = function(){
    return console.log(this.name, this.age + "살");
}
park.printMe();