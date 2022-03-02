'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 뒤늦게 요소를 추가시킬 수 있다. (하지만 지양할것)
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob; // 삭제도 가능함 
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 보통 이렇게 씁니다. 
console.log(ellie['name']); // 실시간으로 원하는 키의 값을 받고싶다면?  
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// key가 어떤건지 모른다.  obj.key 는 여기에 key라는 property가 들어있냐는 물음임.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30); // 호출할 때도 new Person ..
console.log(person4);

// 4. Constructor Function 이렇게 다른 계산을 하지않고 순수하게 오브젝트를 생성하는 함수는 대문자로 시작하고 this를 쓴다. 
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);
// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
