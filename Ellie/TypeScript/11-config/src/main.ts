"use strict";
class Car {
  engine = 0;
  move() {
    const engine = this.engine++;
    console.log("engine", engine);
  }
}

const car = new Car();
car.move();
