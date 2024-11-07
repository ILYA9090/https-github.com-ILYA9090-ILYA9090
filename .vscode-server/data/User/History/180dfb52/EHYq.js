import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import { apiApp } from "./PostsApi";


const store = configureStore({
  reducer: {
    taskStore: tasksReducer,
    [apiApp.reducerPath] : apiApp.reducer,
    //[commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiApp.middleware),
 
});
export default store;
