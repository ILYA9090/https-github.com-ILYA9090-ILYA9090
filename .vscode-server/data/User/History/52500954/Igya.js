/*import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
  };
  
  const  tasksSlice = createSlice({
    name: 'task',
    initialState,
   
    reducers: {
      addTasks : (state, actions) => {
        //task обязательно совпадает с таской(название) из функции handle в PostApp, потому что её я диспатчу
        // обьект actions.payload.task это данные!
        state.tasks = [actions.payload.task, ...state.tasks]
      }
        removeTasks : (state, actions) => {
          state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
          }
    },
  });
  export const { addTasks,  removeTasks} = tasksSlice.actions;
  
  // По умолчанию экспортируется редьюсер, сгенерированный слайсом
  export default tasksSlice.reducer;
*/

  import { createSlice, createEntityAdapter,createAsyncThunk } from '@reduxjs/toolkit';
  import axios from 'axios';

  export const fetchUser = createAsyncThunk(
    'users/fetchUser', 
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=25");
      return await response.data;
      }
  );


  export const deleteUser = createAsyncThunk(
    'users/deleteUser', 
    async (id) => {
       console.log(await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`));
       
      return (id)
    }
  )

  export const addUser = createAsyncThunk(
    'users/addUser', 
    async (userData) => {
      const response = await axios.post(`https://jsonplaceholder.typicode.com/users/${userData}`);
      return await response.data;

      
    }
  )

  const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState({loadingStatus : 'idle', error : null});

const tasksSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTasks: tasksAdapter.addMany,
    removePost: tasksAdapter.removeOne,
    reset: () => tasksAdapter.getInitialState(),
},

extraReducers : (builder) => {
  builder.addCase(fetchUser.pending, (state) => {
    state.loadingStatus = 'loading';
    state.error = null;
  }).addCase(fetchUser.fulfilled, (state, action) => {
    tasksAdapter.addMany(state, action);
    state.loadingStatus = 'idle';
    state.error = null
  }).addCase(deleteUser.fulfilled, tasksAdapter.removeOne)
  .addCase(addUser.fulfilled, tasksAdapter.addMany)
  
    
}
});

export const { addTasks, addUser, removePost, reset } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectors = tasksAdapter.getSelectors((state) => state.taskStore)