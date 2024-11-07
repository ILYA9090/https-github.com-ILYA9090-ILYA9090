import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    // counterReducer это всего лишь название reduceра, которое я пишу сам для себя для удобства. Это обычный редбюсер из файлф counterSlice
    task: tasksReducer,
  },
});
export default store;