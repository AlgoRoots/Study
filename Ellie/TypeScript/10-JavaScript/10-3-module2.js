// default export 하면 이름 재정의 가능
// export default로 하지 않은 함수 * 변수 들은 중괄호로 import 해야 함.
// import sum, { print as printMeassage } from "./10-3-module1.js";
import * as calculator from "./10-3-module1.js";
console.log(calculator.add(2, 2));
calculator.print();
const num = calculator.number;

console.log("num", num);
