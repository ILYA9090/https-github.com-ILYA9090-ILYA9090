import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts, defaultValue, options}) => {
   const dispatch = useDispatch();
   /*
   const sortArray = () => {
    const sort = posts.sort(function (a, b) {
        return a.localeCompare(b);
      });
      dispatch(addTasks(sort))
   }
      */
  return (
    <div className = 'sort'>
      <select> 
      <option value=''>
      {defaultValue}
      </option>
      {options.map((option) => {
        <option key={option.name} value={option.name}>
          {option.surname}
        </option>
      })}
   </select>
    </div>
  )
}

export default SortPosts;