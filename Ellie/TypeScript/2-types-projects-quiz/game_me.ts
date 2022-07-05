/**
 * Let's make a game 🕹
 */

let position: { x: number; y: number } = {
  x: 0,
  y: 0,
};

console.log(position); // { x: 0, y: 0}
move_me("up");
console.log(position); // { x: 0, y: 1}
move_me("down");
console.log(position); // { x: 0, y: 0}
move_me("left");
console.log(position); // { x: -1, y: 0}
move_me("right");
console.log(position); // { x: 0, y: 0}

type Direction = "up" | "down" | "left" | "right";

function move_me(direction: Direction) {
  switch (direction) {
    case "up":
      return position.y++;
    case "down":
      return position.y--;
    case "left":
      return position.x--;
    case "right":
      return position.x++;
    default:
      throw Error("unknown direction");
  }
}
