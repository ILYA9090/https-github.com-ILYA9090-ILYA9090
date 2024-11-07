import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../slices/tasksSlice'
import './style.css'



const SortPosts = () => {
   const posts = useSelector(selectors.selectAll);
   const sortArray = () => {
    const sorted = posts.sort((a, b) => a[sort].localeCompare(b[sort]))
    return sorted
   }
  
  return (
    <div className = 'sort'>
      <select> 
      <option onChange={() => sortArray()}>
        по возрастанию
      </option>
      <option>
        по убыванию
      </option>
   </select>
    </div>
  )
}

export default SortPosts;
