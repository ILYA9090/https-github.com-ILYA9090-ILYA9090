import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { postsApi } from "./PostsApi";

const store = configureStore({
  reducer: {
    taskStore: tasksReducer,
    [postsApi.reducerPath] : postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
export default store;
