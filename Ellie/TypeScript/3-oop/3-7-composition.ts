{
  /*
  composition 구성요소 구성
  레고처럼 조립한다.코드의 재사용성을 높여준다. 
  
  상속의 문제점 : 족보가 꼬이듯이 상속의 깊이가 길어질수록 서로간 관계가 복잡해질 수 있다. 
  이 때 composition console.error('구성을한다',구성을한다)

  */
  
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: Boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += coffeeBeans;
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

  // 기능 별로 컴포지션한다. 각각의 인터페이스가 있다.
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Steaming some milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }
  class FancyMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother{
    private steamMilk(): void {
      console.log('Cold Steaming some milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider{
    private getSugar() {
      console.log('Getting some sugar from candy...')
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  class JarSugarMixer implements SugarProvider{
    private getSugar() {
      console.log('Getting some sugar from jar...')
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother,
    ) {
      // 자식 클래스에서 생성자를 따로 구현하는 경우는 부모의 생성자도 호출해야한다. 
      super(coffeeBeans)
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // 필요한 곳에서 외부에서 만들어둔 클래스를 쓴다.
      return this.milkFrother.makeMilk(coffee);

    }
  }

  class SweetCoffeeMaker extends CoffeeMachine{
    constructor( coffeeBeans: number, private sugar: SugarProvider) {
      super(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  // 클래스는 하나만 상속가능하다. 이 때 composition을 사용하는 것이 더 좋다. 
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider,
    ) {
      super(coffeeBeans);
    }
    // overwriting..
    makeCoffee(shots: number): CoffeeCup{ 
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded);
    }

  }

  // 재사용성이 떨어진다. 
  // 커피기계는 서울우유만 넣을 수 있다..?? 싼 우유거품기만 사용할 수 있다... !!

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  // Sugar
  const candySuger = new CandySugarMixer();
  const jarSuger = new JarSugarMixer();

  // candy 용도에 따라 하나의 클래스를 통해 다른 객체를 만들었다. 
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySuger);
  const sweetJarMachine = new SweetCoffeeMaker(12, jarSuger);

  //
  const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
  const coldLatteMachine = new CaffeLatteMachine(12, 'SS', coldMilkMaker);
  const fancyLatteMachine = new CaffeLatteMachine(12, 'SS', fancyMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySuger)

}
