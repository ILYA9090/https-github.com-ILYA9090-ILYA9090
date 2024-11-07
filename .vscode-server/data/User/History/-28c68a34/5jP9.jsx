import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../slices/tasksSlice'
import './style.css'



const SortPosts = ({posts}) => {
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
      <option value='value1'>
        По названию
      </option>
      <option value='value2'>
        По описанию
      </option>
   </select>
    </div>
  )
}

export default SortPosts;
