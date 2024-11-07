import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { postsApi } from "./PostsApi";
import { commentsApi } from "./CommentsApi";

const store = configureStore({
  reducer: {
    taskStore: tasksReducer,
    [postsApi.reducerPath] : postsApi.reducer,
    //[commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
 
});
export default store;
