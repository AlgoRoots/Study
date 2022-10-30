{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  // bad
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result2 = checkNotNullAnyBad(123);

  // generic: 타입 보장된다.
  // 사용하는 사람이 어떤 타입인지 정할 수 있고, 유연하지만 타입보장이 가능하다.

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
