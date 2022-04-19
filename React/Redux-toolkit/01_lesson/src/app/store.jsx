import { configureStore } from "@reduxjs/toolkit";

// 리듀서 가져오기
import counterReducer from "../features/counter/counterSlice";

// 다른 리듀서들도 이 store에 모음
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
