import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { postsApi } from "./PostsApi";
import { commentsApi } from "./CommentsApi";

const store = configureStore({
  reducer: {
    taskStore: tasksReducer,
    [postsApi.reducerPath] : postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  middleware1 : (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware1),
});
export default store;
