{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginStateAnswer({ state: "loading" }); // 👀 loading...
  printLoginStateAnswer({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginStateAnswer({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginStateAnswer(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 ${state.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
}
