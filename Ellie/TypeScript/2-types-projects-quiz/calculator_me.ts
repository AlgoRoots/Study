/**
 * Let's make a calculator 🧮
 */

type Method = "add" | "subtract" | "multiply" | "divide" | "remainder";

function calculate_me(method: Method, num1: number, num2: number): number {
  if (method === "add") {
    return num1 + num2;
  }
  if (method === "subtract") {
    return num1 - num2;
  }
  if (method === "multiply") {
    return num1 * num2;
  }
  if (method === "divide") {
    return num1 / num2;
  }
  if (method === "remainder") {
    return num1 % num2;
  }
  return 0; // 👈️ all code paths return a value
}
console.log(calculate_me("add", 1, 3)); // 4
console.log(calculate_me("subtract", 3, 1)); // 2
console.log(calculate_me("multiply", 4, 2)); // 8
console.log(calculate_me("divide", 4, 2)); // 2
console.log(calculate_me("remainder", 5, 2)); // 1
