// uuid 같이 자동으로 id 생성해준다.

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

// 내부에서는 자동으로 immer가 작동됀다.
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // 내부 action 및 동기 action
    postAdded: {
      reducer(state, action) {
        // 불변성 유지해주는 payload 를 쓰면 js처럼 push쓸수있다.
        state.push(action.payload);
      },
      // reducer 뒤에 바로 콜백
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

    // post 추가 후 반응 추가..
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        // 불변성 유지 !  payload..!
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

// createSlice 는 action까지 만들어줘서 따로 생성하지 않아도 바로 export가능
export const { postAdded, reactionAdded } = postsSlice.actions;

// reducer도 만들어준다
export default postsSlice.reducer;
