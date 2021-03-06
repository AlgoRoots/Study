/**
 * Let's make a game ๐น
 */

const position = { x: 0, y: 0 };

type Direction = "up" | "down" | "left" | "right";

function moveAnswer(direction: Direction) {
  // ํจ์์์ ๋ณ๋๋ก ๊ฐ์ ๋ฆฌํดํ์ง ์๋๋ค๋ฉด (๋ฆฌํด์ด void type) break๋ฅผ ์ฌ์ฉํด๋ ๋จ.
  // break์์ฑ ์ํ๋ฉด ๋ฐ์๊น์ง ๋ค ์คํ๋จ
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
