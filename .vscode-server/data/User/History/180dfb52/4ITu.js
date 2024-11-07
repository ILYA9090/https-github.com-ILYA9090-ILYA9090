import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { postsApi } from "./PostsApi";

const store = configureStore({
  reducer: {
    taskStore: tasksReducer,

  }
});
export default store;
