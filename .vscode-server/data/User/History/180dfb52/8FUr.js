import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';

const store = configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    counter: counterReducer,
  },
});
export default store;