{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 3, 4];
  const scroes1: number[] = [1, 3, 4];
  // readonly λ λ°μ΄ν°λ₯Ό λ³κ²½ν  μ μκ³  μ½μ μλ§ μλ€. μ΄ λλ Array<string>λ°©μμΌλ‘ μλ¨
  // κ·Έλμ λ€λ₯Έ κ³³μμλ μΌκ΄μ± μκ² μ½λλ₯Ό μ§λ €λ©΄ string[]λ°©μμΌλ‘ μμ±νλ κ²μ΄ λ μ’λ€.
  function printArray(fruits: readonly string[]) {
    // fruits.push()
  }

  // Tuple μλ‘ λ€λ₯Έ νμμ ν¨κ» κ°μ§ μ μλ λ°°μ΄
  // κΆμ₯νμ§ μλλ€. > interface, type alias, classλ‘ λμ²΄νμ¬ μ¬μ©νλ κ²μ΄ μ’λ€.
  let student: [string, number];
  student = ["name", 12];
  // μλμ²λΌ indexλ‘ μ κ·Όνλ κ²μ κ°λμ±μ΄ λ¨μ΄μ§λ€.
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
