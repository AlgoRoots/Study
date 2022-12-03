interface StackGeneric<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNodeGeneric<T> = {
  // 전달 된 값이 있을 때 값이 변경되지 않도록 불변성을 유지해준다 > readonly
  readonly value: T;
  readonly next?: StackNodeGeneric<T>;
};

class StackGenericImpl<T> implements StackGeneric<T> {
  private _size: number = 0;
  private head?: StackNodeGeneric<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: T) {
    if (this._size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      // null == undefined , null !== undefind(값을 같으나 타입은 다르다.)
      //this.head === undefined strick null check 는 head가 null일 경우 체크가 되지 않는다.

      throw new Error("Stack is empty!");
      // stack이 비어있다면 에러를 던진다.
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stackGeneric = new StackGenericImpl<string>(10);

stackGeneric.push("Kelly 1");
stackGeneric.push("bob 1");
stackGeneric.push("Steve 1");

while (stackGeneric.size !== 0) {
  console.log(stackGeneric.pop());
}
const stackGeneric2 = new StackGenericImpl<number>(10);
stackGeneric2.push(111);
stackGeneric2.push(123);
stackGeneric2.push(333);

while (stackGeneric2.size !== 0) {
  console.log(stackGeneric2.pop());
}
