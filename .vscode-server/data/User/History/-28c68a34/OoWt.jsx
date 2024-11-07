import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../slices/tasksSlice'


c
const SortPosts = () => {
   const posts = useSelector(selectors.selectAll);
   const sortArray = posts.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  })
  
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

export default SortPosts
