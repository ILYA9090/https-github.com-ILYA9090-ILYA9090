import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts, defaultValue, options, onChange}) => {
   const dispatch = useDispatch();
   
   
      
  return (
    
      <select > 
      <option value=''>
      {defaultValue}
      </option>
      {options.map((option) => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
   </select>
   
  )
}

export default SortPosts;
