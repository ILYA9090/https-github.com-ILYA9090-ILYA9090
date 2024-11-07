import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts, defaultValue, options, onChange, value}) => {
   const dispatch = useDispatch();
   
   
      
  return (
    
      <select
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      > 
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
