// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
    console.log(result);
  
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements splice 는 배열 자체를 잘라낸다. 
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2);
    console.log(result);
    console.log(array);

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    console.log(Student);
    console.log(students);

    // const result = students.find(function(value, index){
    //   return value.score === 90;
    //   console.log(value, index);
    // })
    // console.log(result);

    const result = students.find((value) => value.score === 90);
    console.log(result);
  }

  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((value) => value.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map( student => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // const result = students.filter( student => student.score < 50);
    const result = students.some( student => student.score <50); // 한 요소만 충족해도 true 로 리턴한다. 
    console.log(result);

    const result2 = !students.every( student => student.score >= 50); // 배열에 들어있는 모든 요소들이 이 조건을 충족해야함.
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    // const result = students.reduce((prev, curr) => {
    //   console.log('---------');
    //   console.log(prev);
    //   console.log(curr);
    //   return prev + curr.score;
    // }, 0);
    // console.log(result);
    const result = students.reduce((prev, curr) =>  prev + curr.score, 0);
    console.log(result / students.length);

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 묶어서도 구분 가능하다. 
  {
    const result = students
    .map ( student => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map(student => student.score)
    .sort( (a, b)=> a - b)
    .join();
    console.log(result);
  }