import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts, defaultValue, options}) => {
   const dispatch = useDispatch();
   
   const sortArray = (sort) => {
    const sort = ([...posts].sort((a, b) => 
        
      ));
      dispatch(addTasks(sort))
   }
      
  return (
    <div className = 'sort'>
      <select onChange={() =>sortArray()}> 
      <option value=''>
      {defaultValue}
      </option>
      {options.map((option) => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
   </select>
    </div>
  )
}

export default SortPosts;
