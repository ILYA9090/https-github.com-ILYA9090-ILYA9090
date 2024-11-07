import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './counterSlice.js';

const store = configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    counter: counterReducers,
  },
});
export default store;