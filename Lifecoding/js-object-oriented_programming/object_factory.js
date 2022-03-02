// var Kim = {
//     name:'Kim',
//     first:10,
//     second:20,
//     third:30,
//     sum:function(){
//         return this.first+this.second;
//     }
// }
// var Lee = {
//     name:'Kim',
//     first:10,
//     second:20,
//     sum:function(){
//         return this.first+this.second;
//     }
// }
// console.log("Kim.sum()", Kim.sum());
// console.log("Lee.sum()", Lee.sum());



// 같은 형식을 찍어내는 공장 , 그 공장을 이용해서 객체를 양산 = Constructtor

// 그 사례 : Date

var d1 = new Date('2022-1-11');
console.log('d1.getFullYear()', d1.getFullYear()); // 객체의 연도를 물어보는 getFullYear
console.log('d1.getMonth()', d1.getMonth()); // 월 0부터 시작 이라 0 출력됨

console.log('Date' , Date);

// Construction 만들어보자
function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var Kim = new Person('Kim', 10, 20, 30); // 각 점수 입력
var Lee = new Person('Lee', 10, 10, 10);
console.log("Kim.sum()", Kim.sum());
console.log("Lee.sum()", Lee.sum());

console.log('Person()', Person()); // 함수를 호출하면 그냥 함수
console.log('new Person()', new Person()); // 함수 앞에 new를 붙이면 더이상 일반적인 함수가 아닌 객체를 생성하는 생성자가 된다. 생성자 : Constructor
