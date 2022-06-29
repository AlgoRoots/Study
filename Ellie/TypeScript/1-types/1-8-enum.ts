{
  /**
   * Enum
   */
  // JavaScript에서는 없음
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 관련된 것은 묶는다. freeze 수정이 안되게 하는 api
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // 여러가지 상수값들을 한 곳에 모아 타입이 보장되고 타입의 값이 변하지 않는 enum 이 있다.
  // TypeScript

  // enum 은 가능한 쓰지 않는 것이 좋다.
  // 갑자기 숫자로 할당할 수 도있다. 타입이 정확하게 보장되지 않는다.
  // 그리고 정말 상수들을 묶을 수 있는 방법은 Union type으로도 할 수 있다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday = 1, // 0 (default value) // Monday = "monday", 로 문자열로 할당할 수도 있음
    Tuesday, // 1
    Wednesday, // 2
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Saturday);
  let day = Days.Monday;
  console.log(day);
  day = Days.Tuesday;
  // 갑자기 숫자로 할당할 수 도있다. 타입이 정확하게 보장되지 않는다.
  // 그리고 정말 상수들을 묶을 수 있는 방법은 Union type으로도 할 수 있다.
  day = 1;

  let dayOfweek: DaysOfWeek = "Monday";
  // union type안에 지정된 것들 중에서만 사용가능
  // dayOfweek = "kelly"
  // 이처럼 enum은 Union string literal로 대체해서 사용할 수 있어서 이렇게 사용함
}
