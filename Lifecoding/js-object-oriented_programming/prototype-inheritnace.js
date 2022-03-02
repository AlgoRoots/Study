// __proto__ 객체가 객체를 상속하도록 할 수 있다. 
// __proto__ 라는 prototype link를 통해서 객체를 상속받을 수 있다. 
// 단점 존재한다 > 다음시간에 

// var superObj = {superVal: 'super'}
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;
// console.log('subObj.subVal =>', subObj.subVal);
// console.log('subObj.superVal =>', subObj.superVal);
// subObj.superVal = 'sub';
// console.log('superObj.superVal =>', superObj.superVal);



// Object.create  객체와 객체간의 상속관계, 더 명확하게는 prototype link를  지정해주는 것이 더 좋은 방법이다. 
var superObj = {superVal: 'super'}
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;
// 이 메쏘드가 새로운 객체를 만드는데, 그 새로운 객체는 superObj를 부모로하는 객체이다.
var subObj = Object.create(superObj); // 주석 처리를 했던 위 코드와 같은 결과가 나온다.
subObj.subVal = 'sub';
// debugger; 객체들의 상태를 확인할 수 있는 것. 
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

// 사용하는 경우

var kim = {
    name : 'kim',
    first : 10, second : 20,
    sum:function(){return this.first+this.second}
}

//__proto__보다 권장되는 Object.crest() 타입으로 했을 떼
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2
}
console.log('lee.sum() :', lee.sum());
console.log('lee.avg() :', lee.avg());

// //__proto__로 했을 때

// var lee = {
//     name:'lee',
//     first:10, second: 10, 
//     //lee 에서만 추가하고 싶은 기능 또한 넣을 수 있다. 
//     avg:function(){
//         return (this.first+this.second)/2
//     }
// }
// // __proto__ lee.sum을 하면 lee라는 객체에 sum이 있는지 찾아본다 > 없으면 __proto__의 property로서 sum이 있는지 찾아본다. 
// // 
// lee.__proto__ = kim;
// console.log('lee.sum() :', lee.sum());
// console.log('lee.avg() :', lee.avg());

