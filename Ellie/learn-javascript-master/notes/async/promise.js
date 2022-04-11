"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 비동기적을 수행할 때 콜백함수 대신 유용하게 쓰인다.
//
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// resolve, reject 두가지 정보를 받는 executor 를 만든다.
// 보통 우리가 네트워크에서 데이터를 받아 올 때 파일에서 큰 데이터를 읽어오는 경우가 많아 시간이 꽤 걸린다.
// 그런것을 동기적으로처리하게 되면 데이터를 받아올 동안 다음 태스크가 실행되지 않기 때문에 시간이 걸리는 일들은
// 프로미스를 만들어 비동기적으로 처리하는 것이 좋다.    // doing some heavy work (network, read files)

// when new Primis is created, the excutor runs automatically.
// 콘솔을 찍어보면 바로 실행이 된다. 이는 프로미스 안에 네트워크 통신을 하는 코드를 작성했다면
// 프로미스가 만들어지는 그 순간 바로 네트워크 통신을 수행하게 된다.
// 만약 네트워크 요청을 사용자가 요구했을 때만 해야되는 경우라면 (ex 버튼 클릭시 네트워크 요청)
// 콘솔찍었을 때 실행되는 것처럼 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 일어날 수 있다.
// 그래서 프로미스를 만드는 순간 그 안에 전달한 executor가 바로 실행되기 때문에 이점을 유의하여 작성해야한다.

const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // 성공하면 resolve 콜백함수 호출
    //resolve("hello!");
    // reject , new Error 오브젝트 통해 에러 출력
    reject(new Error("no network"));
  }, 2000);
});

// promise 사용하기
// 2. Consumers: then, catch, finally

promise
  //promise가 잘 수행되면 .then 원하는 value를 받아올 것 > 3초 후 hello! 출력
  .then((value) => {
    console.log(value);
  })
  // .then을 통해 return 된 promise 에서 catch를 등록
  .catch((error) => {
    console.log(error);
  })
  // 성공 실패유무에 상관없이 무조건 마지막에 호출된다.
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // then 은 값 뿐만아니라 프로미스도 전달할 수 있다.
    // 2배 후 3배까지 한 그 num을 프로미스를 통해 다른 서버에 보내서 다른 숫자로 변환된 값을 받아온다.
    return new Promise((resolve, reject) => {
      // 또 다른 프로미스를 통해 다른 서버와 통신 num - 1 값 반환
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  //  5 반환
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  // .then(hen => getEgg(hen)) 다른함수로 하나만 호출하는 경우 생략가능 암묵적으로 전달해서 호출해줌
  // .then(egg => cook(egg))
  // .then(meal => console.log(meal))
  .then(getEgg)
  // .catch((error) => {
  //   // 달갈 받아오는 데서 에러가 발생했을 시 빵으로 대체하며 바로 문제가 해결됨 : 대체제로 요리 완성
  //   return `🥯`;
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log);
