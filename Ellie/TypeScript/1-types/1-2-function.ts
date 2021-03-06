{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript μ§κ΄μ μ΄λ€. μ΄λ€νμμ λ¦¬ν΄νλμ§ μ μ μλ€ .
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript β¨ => TypeScript
  // Optional parameter
  // λ§μ½ μ λ¬νμ§ μμλ λλ ν¨μλ₯Ό λ§λ€κ³  μ­μ λ Optional parameter = ? μ μ΄λ€ .
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  // μ ν΄μ§ μΈμ κ°μλλ‘, νμλλ‘ μ λ¬ν΄μ€μΌνλ€.
  // printName("Steve", 0);
  printName("Kelly", undefined);
  printName("Anna");

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  // μλ¬΄κ²λ μ λ¬νμ§ μμΌλ©΄ default message μΆλ ₯ (κΈ°λ³Έκ°)
  printMessage();

  // Rest parameter
  // μΈμ κ°μ μκ΄μμ΄ λ°λλλ‘ λͺ¨λ
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  // console.log(addNumbers(1, 2, "dd"));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
