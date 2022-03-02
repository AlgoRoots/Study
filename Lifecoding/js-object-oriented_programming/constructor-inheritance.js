function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first+this.second;
}
// call 을 사용해 생성자 constructor를 상속하는 법
function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second); // = super(name, first, second);
    this.third = third;
}
PersonPlue.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

var Kim = new Person3Plus('Kim', 10, 20, 30);
console.log("Kim.sum()", Kim.sum());
console.log("Kim.avg()", Kim.avg());
