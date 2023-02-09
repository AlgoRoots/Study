const x = {};
const y = {};
console.log("x", x);
console.log("y", y);
// x 와 y는 동일한 prototype을 상속하고 있다. {toString(), valuOf()..}
console.log(x._proto__ === y._proto__);

const array = [];
console.log("array", array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log("making....");
  // };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log("machine1", machine1);
console.log("machine2", machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

// prototype을 이용해 상속 구현
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123);
console.log("latteMachine", latteMachine);

latteMachine.makeCoffee();

// prototype은 자바스크립트에서 객체지향 프로그래밍, 상속을 하기 위해 쓰이며 코드를 재사용하기 위해 쓰인다.
