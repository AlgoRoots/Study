{
  /**
   * Type Assertions 💩 타입을 강요할 때 > 좋지 않음
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  // 현재 result는 any타입이라 문자열 길이를 계산할 수 없다.
  // result.length;
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // TypeError: wrong.push is not a function
  console.log((wrong as Array<number>).push(1)); // 😭

  // 100% 장담할 때 써야한다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  // 숫자 배열일 수도 있지만 undefined일 수도 있기 때문에 경고뜸
  // !를 작성해서 100%확신할 때 쓴다. 무조건 null, undefined가  아니라는 뜻
  numbers!.push(2); // 😭

  const button = document.querySelector("class");
  // button.nodeValue // null일 수도 있음.
  if (button) {
    button.nodeValue;
  }

  // 100% 있을 때 장담할 수 있을 때
  const button2 = document.querySelector("class")!;
}
