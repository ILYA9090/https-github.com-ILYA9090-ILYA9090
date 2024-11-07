import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

const store = configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    // counterReducer это всего лишь название reduceра, которое я пишу сам для себя для удобства. Это обычный редбюсер из файлф counterSlice
    tasks: tasksReducer,
  },
});
export default store;