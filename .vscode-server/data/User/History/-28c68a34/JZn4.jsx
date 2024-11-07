import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts, defaultValue, options}) => {
   const dispatch = useDispatch();
   
   const sortArray = (sort) => {
    const sorted = ([...posts].sort((a, b) => a[sort].localCompare(b[sort])
        
      ));
      dispatch(addTasks(sorted))
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