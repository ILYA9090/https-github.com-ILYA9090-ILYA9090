import React from 'react'

import './style.css'



const SortPosts = ({posts}) => {
   
   const sortArray = () => {
    posts.sort(function (a, b) {
        return a.localeCompare(b);
      });
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
