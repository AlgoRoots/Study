// Callback Hell example
class UserStorage {
  // onSuccess , onError 필요 없음
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          // 성공
          resolve(id);
        } else {
          // 실패
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    // onSuccess , onError 필요 없음
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          // 성공
          resolve({ name: "ellie", role: "admin" });
        } else {
          // 실패
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");

// 프로미스 후속 처리
userStorage
  // 아이디 비번 받아와서
  .loginUser(id, password)
  // getRoles호출 인자가 같아 생략됨
  .then(userStorage.getRoles)
  // role 잘 받아 온다면 alert실행
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  // 실패시 정해둔 에러 콘솔 출력
  .catch(console.log);

// Homework Answer 🚀
userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then(console.log);
