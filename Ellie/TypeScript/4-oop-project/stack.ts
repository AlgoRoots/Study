interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 전달 된 값이 있을 때 값이 변경되지 않도록 불변성을 유지해준다 > readonly
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl(10);

stack.push("Kelly 1");
stack.push("bob 1");
stack.push("Steve 1");

while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
