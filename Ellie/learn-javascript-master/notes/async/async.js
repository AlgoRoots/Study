// async & await
// clear style of using promise :)

// promise
// 네트워크 통신을 통해 10초 후에 데이터를 받아온다고 가정해보자.
async function fetchUserPromise() {
  // do network reqeust in 10 secs....
  return new Promise((resolve, reject) => {
    resolve("Kelly");
  });
}

const user1 = fetchUserPromise();
user1.then(console.log);
console.log(user1); // output : Kelly

// 1. async
// 함수 앞에 async를 붙여주면 자동적으로 함수 안의 코드블럭들이 프로미스로 변환됨
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "useing async : Kelly";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// async가 붙은 함수 안에서만 쓸 수 있다.

// 정해진 ms가 지나면 resolve 호출 ( 2초 후 🍎)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // delay가 끝날 때까지 기다려준다.
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// 프로미스 체이닝을 통했다면 ?
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// 과일들을 받아오는 함수

// 프로미스 체이닝
// 콜백지옥과 비슷한 콜백패턴 문제 발생
// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`)
//   })
// }
// pickFruits().then(console.log)

// async를 사용하면 간결해진다. 하지만 이 코드도 apple이 나나와 사과를 받는 일은 서로 연관이 없으므로
// 병렬적으로 실행해줄 필요가 있다.
// async function pickFruits() {
// const apple = await applePromise; // 2초
// const banana = await bananaPromise; //1초  총 3초걸림
//   return `${apple} + ${banana}`;
// }

// pickFruits().then(console.log);

// 병렬적으로 기능 수행
async function pickFruits() {
  // promise를 만드는 순간 바로 실행 된다.
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 병렬적으로 함수가 실행된다. 총 2초걸림
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 이런 병렬적인 기능을 수행할 때는 APIs를 이용하면 됨

// 3. useful APIs ✨
function pickAllFruits() {
  // Promise.all 이라는 api를 사용하여 모든 프로미스들이 병렬적으로 다 받을 때까지 모아준다.
  // .then 다 받아진 배열이 전달되고 join을 통해 출력
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 어떤 것이든 상관없고 제일 첫 번째 과일을 받아오고 싶다면 ?
// Promise.race api는 배열에 전달 된 프로미스 중에서 가장 먼저 값을 리턴하는 과일만 전달된다. > 바나나 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
