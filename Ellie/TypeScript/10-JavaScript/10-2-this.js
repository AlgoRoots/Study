console.log("this", this);

function simpleFunc() {
  // this===window
  console.log(this);
}

window.simpleFunc();
console.clear();

class Counter {
  const = 0;

  // increase = function () {
  //   // this === Counter!
  //   console.log(this);
  // };

  // 따로 각각 bind()를 하지 않아도 arrow function을 통해 bind 시킬 수 있다.
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

// const caller = counter.increase;
// caller 라는 변수를 할당하면서  let , const로 선언한 변수는 window에 등록되지 않으므로 this의 정보를 잃게된다.
// 함수는 글로벌 객체에 등록이 되어 글로벌 객체에서도 이용이 가능하지만, 변수는 글로벌 객체안에 등록되지 않는다. (var 제외)
const caller = counter.increase.bind(counter); // bind로 함수와 오브젝트 관계를 묶어준다.
caller(); // undefined;

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 이 때 this는 Bob이 된다.  run 함수는 Bob이 콜했기 때문

/**
 * 이처럼 자바스크립트는 this라는 정보를 함수를 다른 곳으로 할당하는 순간 잃어버릴 수 있기 때문에
 * 우리가 오브젝트와 함수의 관계를 잃지 않게 묶어주려면 bind를 해주어야 한다.
 *
 */
