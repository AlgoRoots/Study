/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0 };

type Direction = "up" | "down" | "left" | "right";

function moveAnswer(direction: Direction) {
  // 함수에서 별도로 값을 리턴하지 않는다면 (리턴이 void type) break를 사용해도 됨.
  // break작성 안하면 밑에까지 다 실행됨
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      throw Error(`unknown direction : ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
moveAnswer("up");
console.log(position); // { x: 0, y: 1}
moveAnswer("down");
console.log(position); // { x: 0, y: 0}
moveAnswer("left");
console.log(position); // { x: -1, y: 0}
moveAnswer("right");
console.log(position); // { x: 0, y: 0}
