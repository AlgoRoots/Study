{
  // union은 발생하는 모든 케이스 중 한 가지만 선택하는 것이었다면(or), intersection은 모든 것을 다 합한  성격 (and)
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
