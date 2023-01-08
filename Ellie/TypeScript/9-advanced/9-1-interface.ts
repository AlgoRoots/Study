type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class

class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends

// 상속을 통해 확장할 수 있다.
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// type은 intersection을 이용해 두 가지를 묶음 타입을 만들 수 있다. (확장 가능)
type ZpositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// xx Duplicate identifier 'PositionType'.
// type PositionType {}

// Type aliases can use computed properties // type alias는 머지안됨
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | "right"; // Union type ... interface로는 구현 불가능.

// 업데이트 될 수 있어 달라질 수 있습니다.

// interface: 어떤 것의 규격사항
// 특정한 규격을 정의하는 것이라면 그 규격을 통해서 어떤 것이 구현된다면 interface를 쓰는 것이 더 정확하다.

// Types : 어떠한 데이터를 담을 수 있을지 데이터의 모습(타입)을 정할 수 있는 것!
// 데이터의 특정 타입을 정할 때 타입선언을 한다.
type PositionType1 = {
  x: number;
  y: number;
};

const pos: PositionType1 = { x: 0, y: 0 };
// printPosition(pos);
