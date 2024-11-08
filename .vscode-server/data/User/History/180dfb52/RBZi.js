import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    
    taskStore: tasksReducer,
  },
});
export default store;