import React from 'react'

const PostItem = ({props, number, children}) => {
  return (
    <div>
      <h1>{props}</h1>
      <ul>
        <li>
            {number}
        </li>
        <li>
            {number+1}
        </li>
      </ul>
      {children}
    </div>
  )
}

export default PostItem
