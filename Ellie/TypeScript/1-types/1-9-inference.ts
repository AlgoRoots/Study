/**
 * Type Inference
 */

// 선언함과 동시에 문자열을 할당해서 타입이 지정된다. (타입추론)
let text = "hello";
// text = 5; // type error
text = "hi";

// 함수에 타입이 지정되지 않으면 type any로 되어있어서 타입 명시를 해줘야 함
// 기본 값이 문자열로 되어있어서 타입이 string으로 되어있음
function print(msg: "hello") {
  console.log(msg);
}
print("hello");

function add(x: number, y: number): number {
  // 결과 값이 숫자라고 추론됨
  return x + y;
}

// 이 때 result는 number type으로 자동지정된다.
const result = add(1, 2);

// 타입 추론이 좋은 것은 아니다.
// 예제는 간단하지만  보통 프로젝트 코드를 작성할 때는 복잡하기 때문에 왠만하면 타입을 정확하게 명시하는 것이 좋다.
// let text = "hello" 이런 원시타입의 경우 너무 뻔하게 문자열인게 보여서 생략할 수 있지만 함수같은 것은 특히나 정확히 명시하는 것이 좋다.

// 회사마다 타입 선언에 대한 스타일 가이드가 있을 것!
