{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 직관적이다. 어떤타입을 리턴하는지 알 수 있다 .
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  // 만약 전달하지 않아도 되는 함수를 만들고 십을 때 Optional parameter = ? 을 쓴다 .
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  // 정해진 인자 개수대로, 타입대로 전달해줘야한다.
  // printName("Steve", 0);
  printName("Kelly", undefined);
  printName("Anna");

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  // 아무것도 전달하지 않으면 default message 출력 (기본값)
  printMessage();

  // Rest parameter
  // 인자 개수 상관없이 받는대로 모두
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  // console.log(addNumbers(1, 2, "dd"));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
