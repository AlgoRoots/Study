{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 이런식으로 단독적으로 선언하는 것이 아님
  let age: number | undefined; // age라는 변수는 숫자타입 또는 undefined로 할당할 수 있다.
  age = undefined;
  age = 1;

  // null 값이 비어있다. (결정됨)
  let person: null; // 단독으로 사용하지 않음
  person = null; // null 밖에 못함
  // person = 1;
  let person2: string | null; // string일 수도 있고 데이터 값이 없을 수 도 있다.

  // 보통 xx | undefined;를 많이 이용한다. (데이터 타입이 있거나 | 아직 결정되지 않았거나 )
  // 값이 없을 때는 null을 이용하는 것이 문맥상 더 맞기는 하다.

  // eg.
  function find(): number | undefined {
    return undefined;
  }

  // unknown과 any는 가능하면 피하는 것이 좋다. 💩
  // unknown 알 수 없는 방식. 가능하면 쓰지 않는 것이 좋지만 이 타입이 있는 이유는
  // 타입스크립트가 자바스크립트와 연동해서 쓸 수 있기 때문이다.
  // 타입스크립트에서 자바스크립트 라이브러리를 이용하는 경우 자바스크립트에서 리턴하는 타입을 모를 수 가 있다.
  // 이런 부분도 가능하면 구체적으로 타입을 쓰는 것이 좋고, unknown은 웬만하면 쓰지 않는 것이 좋다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 가능하면 절대 쓰지않는 것이 좋다. 💩
  let anything: any = 0;
  anything = "hello";

  // void 함수에서 아무것도 리턴하지 않으면 쓰는 타입 void인 경우에는 생략할 수 있다.
  function pring(): void {
    console.log("hello");
    return;
  }
  // 변수에서는 잘 쓰지는 않는다. 💩
  let unusable: void = undefined; // undefined밖에 할당할 수 없어 활용성이 떨어짐

  // never 이 함수를 호출하면 리턴하지 않는다. : error을 던지던지, while(true)로 계속 끝나지 않게 코드를 작성하는 경우
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩 이런경우 없음

  // objet 원시타입을 제외한 보든 object타입을 할당할 수 있다. 배열도 전달 가능하다.
  let obj: object; // 💩 가능하면 object도 어떤 타입인지 구체적으로 명시해 작성하는 것이 좋음
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
