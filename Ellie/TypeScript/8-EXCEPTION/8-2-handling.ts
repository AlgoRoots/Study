class NetworkClient {
  tryConnect(): void {
    throw new Error("no network");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (error) {
      // 예상하지 못하는 에러가 발생할 때 어느 부분에서 처리하는 것이 의미있는 에러처리인지 생각해보기.
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);

const app = new App(service);
app.run();
