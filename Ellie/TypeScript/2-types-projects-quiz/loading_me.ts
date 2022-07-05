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

  printLoginStateMe({ state: "loading" }); // 👀 loading...
  printLoginStateMe({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginStateMe({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginStateMe(loadState: ResourceLoadState) {
    if (loadState.state === "loading") {
      console.log("👀 loading...");
    }
    if (loadState.state === "success") {
      console.log(`😃 ${loadState.response.body}`);
    }
    if (loadState.state === "fail") {
      console.log(`😱 ${loadState.reason}`);
    }
  }
}
