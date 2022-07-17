{
  /*
  abstract 
  어떤 상속 클래스를 이용할 때 무언가 반복되는 절차가 있고, 어떤 특정기능만 자식클래스에서 행동이달라질 때 쓸 수 있다. 
  abstract class 
  */
  
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: Boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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
   
    protected extract(shots: number): CoffeeCup{
      this.steamMilk();
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    private addSugar(): void {
      console.log('add some sugar...')
    }
    protected extract(shots: number): CoffeeCup{
         this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ]
  machines.forEach(machine => {
    console.log('----------------------------------------------');
    machine.makeCoffee(1);
  })

}
