"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// 자바스크립트는 동기적이다. 호이스팅이 된 이후보터 코가 우가 작ㅇ한 순서에 맞춰 하나하나씩 동기적으로 실행된다.
// 호이스팅이란 ? 함수선언이나, var 변수들이 자동적으로 제일 위로 선언되는 것이다.
// 호이스팅이 된 이후 부터
// hoisting: var, function declaration

// 동기적이다 정해진 순서에 맞게 코드가 실행되는 것
// 비동기적 : 언제 코드가 실행될지 예측할 수 없다. 간단한 예 setTimeout browser web API로 들 수 있다. 지정한 시간이 지나면 호출해줌
console.log("1");
setTimeout(() => console.log("2"), 1000); // browser 로 요청보냄 콜백함수 ! 나중에 호출해줘 콜 백!
console.log("3");
// 1 > 3 > 2 순서대로 출력됨

// 콜백은 항상 비동기에서만 쓰일까 ? 콜백도 두 가지의 경우로 나뉜다 (동기적 콜백, 비동기적 콜백 )

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example

// 로그인 하면 로그인 유저 정보는 백엔드에서 받아오는게 맞지만 setTimeout()으로 네트워크통신을 하는 것처럼
// 정보를 받아오는걸로 가정하에 진행 
/// 사용자의 역할을 잘 받아온다면 onSuccess, onError 
// 
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  // 사용자 역할을 받아오는 곳
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
// 사용자에게 id, pw 받아옴 
const id = prompt("enter your id");
const password = prompt("enter your passrod");

//loginUser 인자  id, password, onSuccess, onError
userStorage.loginUser(
  id,
  password,
  (user) => {
    // getRoles 인자 user, onSuccess, onError 
    // 로그인 되었다면 사용자의 역할을 받아와야 함 
    userStorage.getRoles(
      // user
      user,
      // 데이터 잘 받아왔을 시 onSuccess
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
        // onError 
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백이용해 콜백 함수 안에서 다른 것 호출 그 안에서 또 호출.. 콜백 지옥