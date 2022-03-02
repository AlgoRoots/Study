var kim = {name:'kim', first:10, second:20};
var lee = {name:'lee', first:10, second:10};
function sum(prefix){
    // this = kkim; 이 되는 것.
    return prefix+(this.first+this.second);
}
// sum이라고 하는 객체를 실행시킨다  = sum(); 
// 모든 함수는 call 이라 하는 method 를 가지고 있다. 왜 ? 모든 함수는 객체이다. 
// sum.call();

// call 자스를 유용하게 만들어준다. 유사한건 // apply 도 있다.                                                                         
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("lee.call(kim)", sum.call(lee, ': '));

//bind 
var kimsum = sum.bind(kim, '-> '); //sum이라고 하는 함수의 내부적으로 this 를 kim이라고 하는 새로운 함수가 만들어진다. 
console.log('kimsum', kimsum());


// call : 실행할 때 마다 어떤 함수의 this값을 바꾸는,context를 바꾼다.  
// bind : 어떤 함수의 내부적으로 this의 값을 영구적으로 바꾸는 새로운 함수를 만든다.
// bind는 호출한 함수를 변경하는 것이 아니라 인자로 받은 조건을 만족하는 새로운 함수를 리턴해준다. 