import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

// fake api
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// server에서 받아옴
const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// createAsyncThunk 는 세 개의 매개변수를 가진다.
// 첫 번 째 type 문자열 작업 값,
//번 째 payloadCreator 콜백 및 opion : 동기적으로 어떤 값을 반환하거나 거부된 프로미스를 에러와 함께 반환해야 한다.

// Thunk의 미들웨어를 간편하게 사용할 수 있다. 또한 액션에 대한 상태의 이름을 지정하여 각기 다른 이름으로 생기는 혼란을 방지한다.
// pending, fullfiled, rejected

// createAsyncThunk 에 try catch넣으면 안됨 extraReducer에서 .addCase할 때 오류 잡아주는데 여기서 넣으면 addCase에서
// 무시된다. 그냥 여기서는 에러를 던지게 두는게 맞음

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    const response = await axios.post(POSTS_URL, initialPost);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  // extraReducers : 액션함수가 자동으로 생성되지 않는 별도의 액션함수가 존재하는 리듀서를 정의 (선택 옵션)
  // 리듀서 내부에서 정의되지 않은 액션들을 처리한다.
  // builder에서 각각의 경우를 지정한 것. loading, succeeded, failed, ...
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // 포스트 추가 미들웨어 액션의 리듀서
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0,
        };
        console.log(action.payload);
        state.posts.push(action.payload);
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
