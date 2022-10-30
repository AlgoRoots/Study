interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left();
either.right();

// 활용성이 높은 클래스와 함수를 만들 수 있다.
const best = new SimpleEither({ name: "kelly" }, "hello");
