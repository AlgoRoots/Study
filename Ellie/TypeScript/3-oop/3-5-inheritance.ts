{

  /*
  상속을 통해 공통된 기능을 재사용하며 자식클래스에서만 사용할 수 있는 기능을 추가할 수 있으며
  super.을 통해 부모클래스에 있는 함수를 호출, 접근 할 수 있다. 

  만약 자식 클래스에서 또다른 데이터를 생성자에서 받아올 수 있다면
  */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }




  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      // 자식 클래스에서 생성자를 따로 구현하는 경우는 부모의 생성자도 호출해야한다. 
      super(coffeeBeans)
    }
    // 자식에만 있는 함수 steamMilk()
    private steamMilk(): void {
      console.log('Steaming some milk...')
    }
    makeCoffee(shots: number): CoffeeCup {
      // 상속한 부모함수 호출 가능 super
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
      
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

  const machine = new CoffeeMachine(23);
  const latteeMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteeMachine.makeCoffee(1);
  console.log('coffee', coffee)
  console.log(latteeMachine.serialNumber)

}
