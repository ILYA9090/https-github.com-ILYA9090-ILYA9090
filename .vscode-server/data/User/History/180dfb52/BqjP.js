import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    
    taskStore: tasksReducer,
  },
  devTools: true,
});
export default store;