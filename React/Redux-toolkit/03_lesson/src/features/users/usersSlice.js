import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// api 받아오기
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

// const initialState = [
//     { id: '0', name: 'Dude Lebowski' },
//     { id: '1', name: 'Neil Young' },
//     { id: '2', name: 'Dave Gray' }
// ]

// 미들웨어 thunk
// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get(USERS_URL);
//   return response.data;
// });
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // 미들웨어는 리듀서 외부에서 동작하기 때문에 extra로 따로 action지정한다.. 미들웨어 액션 만드는것 같은듯
  extraReducers(builder) {
    // user에서는 하나의 케이스만 다룸..! push같은걸 사용안하고 바로 return 함으로서 사용자 상태를 완전히 대체한다.
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

console.log(selectAllUsers);
export default usersSlice.reducer;
