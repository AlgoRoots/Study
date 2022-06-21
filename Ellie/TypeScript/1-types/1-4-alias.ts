{
  /**
   * Type Aliases
   */
  // Text라는 새로운 타입 선언
  type Text = string;
  const name: Text = "Kelly";
  const address: Text = "korea";
  type Num = number;
  // object 도 타입으로 만들 수 있다.
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // animal: "dog",
    name: "kelly",
    age: 27,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let kellyName: Name;
  // kellyName = "dfdf";
  kellyName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  // const isCat: Boal = false; > error

  // 쓰는 이유 Union
}
