// Whole-script strict mode syntax
// JavaScrips is very flexible
// flexible = dangerous
// added ECMAScript 5
// 'use strict';
// 바닐라자스로 개발할 때는 use strict을 선언해준다. 조금 더 상식적인 범위에서 이용할 수 있고 자스엔진이 더 효율적으로 빠르게
// 분석할 수 있어 성능개선에 도움이 된다. 

'use strict';

console.log('Hello World');

// 2. Variable
// let (added in ES6) -Mutable data type (값을 변경할 수 있음)

let name = 'Algoroot';
console.log(name);
name = 'hello';
console. log(name);

// 3. Constants (Immutable data type)
// favor immutable data type alwys for a few reasons:
// - security
// thread safety
// reduce human mistakes
// 가리키고있는 포인터가 잠겨있다. 
// 값을 선언한 후 변경안됨
const daysInWeek = 7;
const maxNumber = 5;


// 정리 : 자바스크립트는 변수를 선언할 때 let , const 두가지 타입이 있다. 


// 4. Variabble types
// primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function 

'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance


// 엘리 노트 

// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write) 메모리의 값을 읽고 쓰는게 가능
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only) 읽기만 가능 웬만해서는 이걸로 자성한다. 
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types 메모리의 값이 저장되는 방법은 두가지가있다. 
// primitive, single item: number, string, boolean, null, undefined, symbol 값 자체가 메모리에 저장된다.
// object, box container 너무커서 메모리에 한번에 못올라간다. 오브젝트가 가리키는 레퍼런스가 메모리에 저장된다. 
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));