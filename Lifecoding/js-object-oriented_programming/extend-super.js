// 상속하면 extends라는 키워드를 쓴다. 
// 상속받는 자식 class는 어떻게 구현하면 될까 ?

// class에 어떤 기능을 추가하고 싶은데 만약 남이 짠 코드라 수정할 수 없는 경우나 추가하고 싶은 기능이 거의 
// 사용되지 않는 경우 전체코드를 수정하는 일은 부담스럽다. 
// 이럴 때 새로 class 를 지정할 수 있지만 이전의 코드가 중복된다. 
// 따라서 이전의 코드를 연장한다는 의미로 extends라는 키워드를 써서 중복되는 함수를 제거한다. 


class Person3{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second =second;

        // console.log('constructor');
    }
    sum(){
        return this.first+this.second;
        }
}


// 만일 third를 추가하고싶다면 super를 쓴다.
class Person3Plus extends Person3{ // Person3에서 확장한다. 중복의 제거: 상속 
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;

        // console.log('constructor');
    }
    sum(){
        return super.sum()+this.third;
        }

    avg(){
        return (this.first+this.second+this.third)/2;
    }

}


// 
var Kim = new Person3Plus('Kim', 10, 20, 30);
console.log("Kim.sum()", Kim.sum());
console.log("Kim.avg()", Kim.avg());


// 만약 third를 추가하고 싶다면? 


// super
//
