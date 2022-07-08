{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 멤버변수로 오브젝트가 만들때마다 데이터가 생성된다. 즉 오브젝트마다 새로 생성되는 데이터면 멤버변수로,
    // 고정적이라면 static을 사용해 class level로 만든다. 이는 함수에서도 적용된다.

    static BEANS_GRAM_PER_SHOT = 7; // class level 오브젝트마다 데이터가 생성되지 않는다.
    coffeeBeans: number = 0; // instance (object) level

    // class라는 오브젝트를 만들 때 항상 처음에 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 함수도 static을 적용시킬 수 있다. Math.abs,Math.max같은 것
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  // new 라는 것은 클래스의 인스턴스를 ()는 생성자를 호출하는 것이다.
  // maker안에는 32개의 커피콩이 담긴 오브젝트가 생성된다.
  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(14);
  console.log(maker);
  console.log(maker2);
  // CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 32 }
  //
  const makeStaticFun = CoffeeMaker.makeMachine(3);
  console.log(makeStaticFun);
}
