type NetworkErrorState = {
  result: "fail";
  reason: "offline" | "down" | "timeout";
};
type SuccessState = {
  result: "success";
};
type ResultState = SuccessState | NetworkErrorState;

class NetworkClient {
  tryConnect(): ResultState {
    return { result: "fail", reason: "offline" };
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    return this.client.tryConnect();
    // login...
  }
}

const client = new NetworkClient();
const service = new UserService(client);

class App {
  constructor(private userService: UserService) {}
  run() {
    const status = this.userService.login();
    if (status.result === "fail" && status.reason === "offline") {
      // error
    }
    // try {
    //   this.userService.login();
    // } catch (error) {
    //   // 예상하지 못하는 에러가 발생할 때 어느 부분에서 처리하는 것이 의미있는 에러처리인지 생각해보기.
    //   // show dialog to user
    //   if (error instanceof OfflineError) {
    //     //
    //   }
    // }
  }
}

const app = new App(service);
app.run();
