console.log("this", this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear();

class Counter {
  const = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller(); // undefined;
