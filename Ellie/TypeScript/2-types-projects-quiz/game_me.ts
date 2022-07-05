/**
 * Let's make a game 🕹
 */

let positionMe: { x: number; y: number } = {
  x: 0,
  y: 0,
};

console.log(positionMe); // { x: 0, y: 0}
moveMe("up");
console.log(positionMe); // { x: 0, y: 1}
moveMe("down");
console.log(positionMe); // { x: 0, y: 0}
moveMe("left");
console.log(positionMe); // { x: -1, y: 0}
moveMe("right");
console.log(positionMe); // { x: 0, y: 0}

type DirectionMe = "up" | "down" | "left" | "right";

function moveMe(direction: DirectionMe) {
  switch (direction) {
    case "up":
      return positionMe.y++;
    case "down":
      return positionMe.y--;
    case "left":
      return positionMe.x--;
    case "right":
      return positionMe.x++;
    default:
      throw Error("unknown direction");
  }
}
