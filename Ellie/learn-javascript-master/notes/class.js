'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);



// 

console.clear();

// class Counter {
//   constructor() {
//     this.counter = 0;

//   }
//   // class 에서 함수를 선언할 때는 function 이라고 안해도 됨 
//   increase(runIf5Times) {
//     this.counter++;
//     console.log(this.counter);
//     if(this.counter % 5 === 0) {
//       runIf5Times(this.counter);
//     }
//   }
// }

// const coolCounter = new Counter();
// function printSomething(num) {
//   console.log(`yo! ${num}`);
// }

// function alertNum(num) {
//   alert(`alert ${num}`);
// }
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(alertNum);


// 장점 : 조절할 수 있다.  콜백함수를 전달함으로서 우리가 원하는 기능을 수행할 수 있다. 
// 단점 : increase 라는 함수를 호출할 때마다 번거롭다 > custructor 에서 콜백함수를 받는다. runEveryFiveTimes


class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;

  }
  // class 에서 함수를 선언할 때는 function 이라고 안해도 됨 
  increase() {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      // this.callback(this.counter);
      // 만약 인자에 아무것도 없다면 runEveryFiveTimes 가 undefined되면서 타입 에러가 뜬다. const coolCounter = new Counter();
      // 그래서 this.callback이 있다면(true === !undefined) 실행해 달라는 코드를 만들어야 한다. if(this.callback) {}

      // if(this.callback) {
      //   this.callback(this.counter);
      // }

      // 더 깔끔하게는 아래와 같이 씀
      this.callback && this.callback(this.counter);
      }
    }
  }

// 이렇게 콜백함수를 이용해서 우리가 원하는 기능을 여러가지로 구현할 수 있다. 

function printSomething(num) {
  console.log(`yo! ${num}`);
}

function alertNum(num) {
  alert(`alert ${num}`);
}

// 하나의 클래스로 다양한 오브젝트를 만들어서 서로다른 기능을 수행할 수 있다.  class를 원하는 기능을 끼워맞춰 재조립을 해야함 == 콜백함수가 필요한 이유
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// const coolCounter = new Counter(printSomething);
// // 만약 인자에 아무것도 없다면 runEveryFiveTimes 가 undefined되면서 타입 에러가 뜬다. const coolCounter = new Counter();


// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
