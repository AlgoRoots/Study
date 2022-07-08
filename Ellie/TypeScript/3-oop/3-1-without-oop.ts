{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // primitive type에서 숫자를 할당하는 경우는 타입추론을 이용해 타입을 생략해도 괜찮다.
  const BEANS_GRAM_PER_SHOT = 7; // const BEANS_GRAM_PER_SHOT  : number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      // key , value가 같으면 생략가능
      shots, // shots: shots
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
