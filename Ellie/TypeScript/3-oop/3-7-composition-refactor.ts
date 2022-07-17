{
  /*
  composition 구성요소 구성
  레고처럼 조립한다.코드의 재사용성을 높여준다. 
  
  상속의 문제점 : 족보가 꼬이듯이 상속의 깊이가 길어질수록 서로간 관계가 복잡해질 수 있다. 
  이 때 composition 을 사용하는 것이 좋다. 

  상속이 유용한 경우가 있지만, 너무나 수직적인 관계, 깊은 관계라면 컴포지션으로 대체하는 것을 고려해보자. 
  (유지보수 줄이기, 재사용성 증가)

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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
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

  class NoMilk implements MilkFrother{
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
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


  // 재사용성이 떨어진다. 
  // 커피기계는 서울우유만 넣을 수 있다..?? 싼 우유거품기만 사용할 수 있다... !!

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const jarSugar = new JarSugarMixer();
  const noSugar = new NoSugar();

  // candy 용도에 따라 하나의 클래스를 통해 다른 객체를 만들었다. 
  const sweetCandyMachine = new CoffeeMachine(12, noMilk ,candySugar);
  const sweetJarMachine = new CoffeeMachine(12, noMilk ,jarSugar);

  // CoffeeMachine라는 클래스에 우리가 필요한 다양한 형태의 우유와 설탕을 주입해서 다양한 오브젝트를 만들 수 있다. 
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar)

}
