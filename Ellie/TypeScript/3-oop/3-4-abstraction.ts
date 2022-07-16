{
  /*
  abstraction 추상화하기
  캡슐화를 통해(private, public 제어) 추상화를 성취할 수 있다. inferface를 지원하지 않는 문법이 있을 때
  
  하지만 이런 캡슐화는 추상화는 아님! 

  캡슐화 : 외부에서 알면 안되는 정보, 알필요 없는 정보, 직접적으로 수정하면 안되는 정보 (상태와 내부에서만 쓰이는함수)
  들을 숨기는 테크닉

  추상화 : 여러 클래스에 걸쳐 공통적으로 사용되는 함수들의 규격을 정의함

  */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // CoffeeMachined 라는 클래스는 CoffeMaker이라는 인터페이스 규약을 따른다
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level 오브젝트마다 데이터가 생성되지 않는다.
    private coffeeBeans: number = 0; // instance (object) level

    // class라는 오브젝트를 만들 때 항상 처음에 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 함수도 static을 적용시킬 수 있다. Math.abs,Math.max같은 것
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    // public is default
    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up...!!");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shoots...`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // new 라는 것은 클래스의 인스턴스를 ()는 생성자를 호출하는 것이다.
  // maker안에는 32개의 커피콩이 담긴 오브젝트가 생성된다.
  const maker: CoffeeMachine = new CoffeeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = new CoffeeMachine(32);
  // maker2.fillCoffeeBeans(32); // interface CoffeeMaker에 없으므로 사용할 수 없다.
  maker2.makeCoffee(2);
}
