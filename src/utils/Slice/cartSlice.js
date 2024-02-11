import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase("fetchPosts/pending", (state) => {
        state.status = "pending";
      })
      .addCase("fetchPosts.fullfilled", (state, action) => {
        state.status = "fullfilled";
        state.posts = state.posts.concat(action.payload);
      });
  },
});

export const { addItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await fetch("/api/posts");
  return data.data;
});
