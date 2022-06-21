{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  const scroes1: number[] = [1, 3, 4];
  // readonly 는 데이터를 변경할 수 없고 읽을 수만 있다. 이 때는 Array<string>방식으로 안됨
  // 그래서 다른 곳에서도 일관성 있게 코드를 짜려면 string[]방식으로 작성하는 것이 더 좋다.
  function printArray(fruits: readonly string[]) {
    // fruits.push()
  }

  // Tuple 서로 다른 타입을 함께 가질 수 있는 배열
  // 권장하지 않는다. > interface, type alias, class로 대체하여 사용하는 것이 좋다.
  let student: [string, number];
  student = ["name", 12];
  // 아래처럼 index로 접근하는 것은 가독성이 떨어진다.
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
